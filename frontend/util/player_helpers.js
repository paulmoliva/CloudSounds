export function playTrack(el) {
  //if any tracks are currently playing
  if ($('.playing').length){
    //stop current track
    window.audio.playPause();

    //remove event listeners from other canvases
    $('.waveform').unbind('click');
  }
  //Add playing class to playlist
  let trackID = $(el).attr('id').match(/\d+/g);
  $('#track-' + trackID).addClass('playing').siblings().removeClass('playing');
  window.audio.load($(el).attr('data-src'));
  $('#wrapper').removeClass('hidden');

  //Add now playing badge to player
  const playlistItem = $('.playlist-item.playing');
  const imageURL = $(playlistItem).attr('data-img');
  const title = $(playlistItem).attr('data-title');
  const badge = $('.nowplaying-badge');
  badge.empty();
  badge.append(`<img src=${imageURL}>`);
  badge.append(`<ul class='column'>
                  <li class='playlist-name'>Playing from Cloudy Day Tracks</li>
                  <li class= 'title'>${title}</li>
                </ul>`);

  //play the track
  window.audio.play();

  //for detectng clicks on the waveform
  var playingTrackID = $('.playing').attr('id').split('-')[1];
  var can = $('#waveform-' + playingTrackID);
  function getPosition(event)
  {
    var x = new Number();
    var y = new Number();
    var canvas = $('#waveform-' + playingTrackID)[0];

    if (event.x != undefined && event.y != undefined)
    {
      x = event.x;
      y = event.y;
    }
    else // Firefox method to get the position
    {
      x = event.clientX + document.body.scrollLeft +
          document.documentElement.scrollLeft;
      y = event.clientY + document.body.scrollTop +
          document.documentElement.scrollTop;
    }
    x -= canvas.offsetLeft;
    y -= canvas.offsetTop;
    var wave = $('#waveform-' + trackID + ' wave canvas');
    var waveWidth = wave.width();
    window.audio.skipTo( x / waveWidth);
  }
  can.on("click", getPosition);
}

export function addOlListener() {
  $('ol').click( e => {
    $(e.target).addClass('playing').siblings().removeClass('playing');
    // window.audio.load($(e.target).attr('data-src'));
    // $('#wrapper').removeClass('hidden');
    // window.audio.play();
    playTrack(e.target);
  });
}

export function addTracktoPlaylist(track){
  if (!$(`ol #track-${track.id}`).length){
    $('ol').append(
      `<li id='track-${track.id}'
        class='playlist-item'
        data-src=${track.audio_url}
        data-img=${track.image_url.replace('upload', 'upload/w_30,h_30')}
        data-title=${htmlEntities(track.title)}>
        ${_slicedTitle(((screen.width * 0.15)/12), track.title)}
      </li>`);
  }

  //from Stack Overflow user j08691 (space to &nbsp is mine)
  function htmlEntities(str) {
      return String(str).replace(/&/g, '&amp;').replace(/</g, '&lt;')
        .replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/ /g, '&nbsp');
  }

}

function _slicedTitle(ln, str){
  let elipses;
  if (str.length > ln -1){
    elipses = "...";
  } else{
    elipses = "";
  }
  return str.slice(0, ln) + elipses;
}
