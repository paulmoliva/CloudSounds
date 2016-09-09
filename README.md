# CloudSounds

![CloudSounds](http://res.cloudinary.com/cloud-sounds/image/upload/c_scale,w_960/v1473444479/Selection_019_dhgfz1.png)

[CloudSounds live][heroku]

[heroku]: https://www.cloudsounds.io

CloudSounds is a full-stack application inspired by SoundCloud. It uses Ruby on Rails on the backend, a PostgreSQL database, and React.js with a Redux architectural framework on the frontend.

## Features & Implementation

### Single-Page App

CloudSounds is a single-page application; all content is delivered on one static page and tracks play continously during navigation of the site. Upon load of the DOM, the app checks to see if a user is logged in with a call to `window.currentUser` -- which is set in the Rails view.

```javascript
document.addEventListener('DOMContentLoaded', () => {
  let store;
  if (window.currentUser) {
    const initialState = {session: {currentUser: window.currentUser}};
    store = configureStore(initialState);
  } else {
    store = configureStore();
  }

  const root = document.getElementById('root');
  ReactDOM.render(<Root store={store}/>, root);
});
```

### Audio Player

CloudSounds uses a custom fork of [Audio.js](https://github.com/kolber/audiojs) for its audio player. Upon render of the app component, the player is configured and stays in place for the duration of the user's stay on the page. The visual components of the player UI-- volume, progress bar, and playlist are also configured at this time.

```javascript
setUpPlayer(){
    let a = window.audiojs.createAll({
      trackEnded: function() {
        let playing = $('.playing');
        var next = $('.playing').next();
        if (!next.length){
          $('#wrapper').toggleClass('hidden');
        } else {
          const trackId = next.attr('id').split('-')[1];
          playTrack($(next[0]));
        }
      }
    });

    // Strap the player onto the window
    window.audio = a[0];

    //set up click handlers for next, back, and volume, playlist show/hide
    $('.skip').on('click', () => {
      var next = $('li.playing').next();
      if (!next.length) next = $('ol li').first();
      next.click();
    });

    $('.back').on('click', () => {
      //get length of progress bar in px
      const progress = parseInt($('.progress').css('width').match(/\d+/g));

      //if near track beginning, play previous track.
      if(progress < 5){
        var prev = $('li.playing').prev();
        if (!prev.length) prev = $('ol li').last();
        prev.click();
      //else restart current track
    } else {
      window.audio.skipTo(0);
    }
    });

    $('#playlist-queue').on('click', () => {
      $('#playlist').toggleClass('hidden');
    });

    $('.volume').hover( () => {
      $('.volume-control').toggleClass('hidden');
    });

    //set volume by clicking
    const player = $('audio')[0];
    $('.volume-control').on('click', (e) => {
      var offset = $('.volume-control').offset();
      var relY = e.pageY - offset.top;
      relY = 60 - relY;
      player.volume = relY / 60;
      console.log(relY);
      $('.volume-bar').css('height', `${relY}px`);
      $('.volume').attr('data-volume', `${relY}`);
      $('.volume').attr('data-prevvolume', `${relY}`);
    });

    //default volume attribute of 60
    $('.volume').attr('data-volume', `60`);
    $('.volume').attr('data-prevvolume', `60`);

    //mute volume by clicking volume icon
    $('.volume').on('click', (e) => {
      if (e.target.className !== 'volume') return;
      const currentVolume = parseInt($('.volume').attr('data-volume'));
      console.log(currentVolume);
      if (currentVolume > 0 || isNaN(currentVolume)){
        player.volume = 0.0;
        $('.volume-bar').css('height', `0px`);
        $('.volume').attr('data-volume', '0');
      } else {
        const prevvolume = parseInt($('.volume').attr('data-prevvolume'));
        player.volume = prevvolume / 60;
        $('.volume-bar').css('height', `${prevvolume}px`);
        $('.volume').attr('data-volume', prevvolume);
      }
    });
  }
```

### Waveforms

Waveforms are generated with [Wavesurfer.js](https://github.com/katspaugh/wavesurfer.js). The first time a track is uploaded, CloudSounds uses WaveSurfer to asynchronously generate the waveform data. Upon success, a call is made to Wavesurfer's off-label backend method ```getPeaks()```, and the track's waveform data is stored in the database as an array of floating point integers.

```javascript
if (!this.props.track.peaks.length){
  waveform.load(this.props.track.audio_url);
  $(`#waveform-${this.props.track.id}`).append(
    `<div id="waveform-loading-${this.props.track.id}"  style="z-index:1; position: absolute; top: 0px; width:${(screen.width * 0.4062)}px; height:45px; display:flex; flex-direction: row; align-items: center;"><h2 style="font-size: 20px;">Loading Waveform</h2><img src='https://res.cloudinary.com/cloud-sounds/image/upload/v1473033713/loading5_kluvdv.gif' height='40px' width='40px'/></div>`
  );
  const numPeaks = Math.round((screen.width * 0.4062) / 1.75);
  waveform.on('ready', function () {
    const peaks = waveform.backend.getPeaks(numPeaks);

    $.ajax({
      url: '/api/tracks/' + that.props.track.id,
      type: 'PUT',
      data: {
        track: {
          'peaks': peaks
        }
      }
    });
    $(`#waveform-loading-${that.props.track.id}`).remove();
    window.waveforms[`${that.props.track.id}`] = waveform;
  });
}
```

When the track is played, the custom fork of [Audio.js](https://github.com/kolber/audiojs) calls the waveform's ```.drawer.progress(percent)``` within its own ```updatePlayhead(percent)``` method. Fortuitously, both methods accept their ```percent``` argument as a float between 0.0 and 1.0, making for seamless integration of the two libraries' progress trackers.

```javascript
settings: {
//...
  updatePlayhead: function(percent) {
    var player = this.settings.createPlayer,
        progress = getByClass(player.progressClass, this.wrapper);
    progress.style.width = Math.round(100 * percent) + '%';

    //draw progress on waveform if its canvas container is present.
    var trackID = $('.playing').attr('id').split('-')[1];
    var can = $('canvas#waveform-progress-' + trackID)[0]
    if (can) {
      window.waveforms[trackID.toString()].drawer.progress(percent);
    }

    var played = getByClass(player.playedClass, this.wrapper),
        p = this.duration * percent,
        m = Math.floor(p / 60),
        s = Math.floor(p % 60);
    played.innerHTML = ((m<10?'0':'')+m+':'+(s<10?'0':'')+s);
  }
//...
}
```   

Additionally, when a track is played, a click handler is installed on a transparent, absolutely positioned ```div``` overlaying the waveform, allowing the user to click the waveform to advance or rewind the track's progress. The handler is removed once the track is no longer playing, so wayward clicks upon a previously played track's waveform do not interfere with the currently playing track's progress.

![waveform](http://res.cloudinary.com/cloud-sounds/image/upload/c_scale,w_480/v1473444038/ezgif.com-video-to-gif_1_h0eudw.gif)

### Comments and Likes

Users can comment and like tracks. The ```tracks``` slice of the redux store contains a boolean ```liked``` for each track in the state. ```liked``` indicates whether the ```currentUser``` has liked the particular track. ```liked``` determines which action is dispatched when a track's like button is clicked.

```javascript
makeLikeButton() {
  if(this.props.track.liked){
    return (
      <button id={this.props.track.id + '-like'}
        onClick={this.toggleLike}
        className='track-favorite liked'>{this.props.track.like_count}
      </button>
    );
  } else {
    return (
      <button id={this.props.track.id + '-like'}
        onClick={this.toggleLike}
        className='track-favorite'>{this.props.track.like_count}
      </button>
    );
  }
}
```

### Weather Moods

CloudSounds uses the [worldweatheronline](worldweatheronline.com) API to fetch weather data for a user's location. Each uploaded track is tagged with a particular 'weather mood' by the uploader, and when a user logs in, CloudSounds displays tracks pertaining to the current weather in their location. If the user is in a different mood, a selection can be made from a dropdown menu and tracks for a different type of weather are rendered.

![weatherMoods](http://res.cloudinary.com/cloud-sounds/image/upload/c_scale,w_480/v1473443468/ezgif.com-video-to-gif_hfyitg.gif)

### Search

The splash page and navbar contain a search bar that autocompletes a list of matching tracks. The tracks can be played or added to the playlist from the search results list without navigating to a separate page.
