import React from 'react';
import TrackCommentsIndex from './track_comments_index';

class TrackItem  extends React.Component {

 constructor(props) {
   super(props);
   this.addTracktoPlaylist = this.addTracktoPlaylist.bind(this);
   this.deleteThisTrack = this.deleteThisTrack.bind(this);
   this.generateWaveform = this.generateWaveform.bind(this);
   this.listenForComments = this.listenForComments.bind(this);
 }
  deleteThisTrack() {
    this.props.deleteTrack(this.props.track);
    this.props.fetchUserTracks(this.props.currentUser.user);
  }
  addTracktoPlaylist(){
    $('ol').append(
      `<li id='track-${this.props.track.id}'
        class='playlist-item'
        data-src=${this.props.track.audio_url}>
        ${this._slicedTitle(((screen.width * 0.15)/12), this.props.track.title)}
      </li>`);
  }
  _slicedTitle(ln, str){
    let elipses;
    if (str.length > ln -1){
      elipses = "...";
    } else{
      elipses = "";
    }
    return str.slice(0, ln) + elipses;
  }
  generateWaveform() {
    var waveform = window.Wavesurfer.create({
      container: `#waveform-${this.props.track.id}`,
      maxCanvasWidth: (screen.width * 0.50),
      height: 45,
      waveColor: '#7EC0EE',
      cursorColor: 'transparent'
    });
    waveform.load(this.props.track.audio_url);
  }

  listenForComments(e) {
    if (e.which === 13 && !$(e.currentTarget).hasClass('hidden')) {
      const trackID = parseInt($(e.currentTarget).attr('id').split('-')[0]);
      const comment_params = {
        comment: {
          user_id:this.props.currentUser.user.id,
          track_id: trackID,
          body: $(e.currentTarget).val()
        }
      };
      this.props.createComment(comment_params);
      console.log(comment_params);
      $(e.currentTarget).addClass('hidden');
      const commentsList = $(`#track-${trackID}-comments`);
      debugger;
      if (commentsList.hasClass('hidden')){
        commentsList.removeClass('hidden');
        const showButton = $(`#track-${trackID}-show-comments`);
        showButton.text(showButton.text().replace('show', 'hide')
          .replace('▼', '►'));
      }

    }
  }

  componentDidMount(){
    this.generateWaveform();
    this.addTracktoPlaylist();
    $(".comment").keyup(this.listenForComments);
  }

  render() {
    return (
    <li key={this.props.track.id}>
      <div className="track-item">
        <img src=
          {this.props.track.image_url
            .replace('upload', 'upload/w_160,h_160/r_10')}
          alt={this.props.track.title}
        />
        <div className=
          {"column " + "weather-" + this.props.track.weather_id + "-track"}>
          <div className = "flex-row">
            <button className="circle-play"
              id={this.props.track.id}
              data-src={this.props.track.audio_url}
              onClick={this.props.playTrack}>

            </button>
            <div className="info">
              <p className="track-user">
                {this.props.currentUser.user.username}
              </p>
              <p className="track-name">
                {this.props.track.title}
              </p>
            </div>
            <div className="icons">
              <img src=
                {"http://res.cloudinary.com/cloud-sounds/image/upload/w_40,h_40/v1472690716/icon-" +
                    this.props.track.weather_id}
                className='icon-40 favorite-icon'
              />
            </div>
          </div>
          <div className="track-description">
            <div className="waveform"
              id={'waveform-' + this.props.track.id}>
            </div>
          </div>
          <input className="comment" type="text" id={`${this.props.track.id}-commentform`}placeholder="Write a comment"/>
          <ul className='track-item-buttons'>
            <button className='track-favorite'>24</button>
            <button className='track-delete'
              onClick={this.deleteThisTrack}>
            </button>
          </ul>
        </div>
      </div>
      {new TrackCommentsIndex(this.props.track.comments).render()}
    </li>);
  }
}

export default TrackItem;
//TODO: do something with description{track.description}
