import React from 'react';
import TrackCommentsIndex from './track_comments_index';
import WaveUtil from './../../util/wave_util';
import { Link } from 'react-router';
class TrackItem  extends React.Component {

 constructor(props) {
   super(props);
   this.addTracktoPlaylist = this.addTracktoPlaylist.bind(this);
   this.deleteThisTrack = this.deleteThisTrack.bind(this);
   this.generateWaveform = this.generateWaveform.bind(this);
   this.listenForComments = this.listenForComments.bind(this);
   this.makeDeleteButton = this.makeDeleteButton.bind(this);
   this.makeLikeButton = this.makeLikeButton.bind(this);
   this.makeLikeIcon = this.makeLikeIcon.bind(this);
   this.toggleLike = this.toggleLike.bind(this);
 }
  deleteThisTrack() {
    this.props.deleteTrack(this.props.track);
    this.props.fetchUserTracks(this.props.currentUser.user);
  }
  addTracktoPlaylist(){
    if (!$(`ol #track-${this.props.track.id}`).length){
      $('ol').append(
        `<li id='track-${this.props.track.id}'
          class='playlist-item'
          data-src=${this.props.track.audio_url}
          data-img=${this.props.track.image_url.replace('upload', 'upload/w_30,h_30')}
          data-weathername=${this.props.track.weather_name}
          data-title=${htmlEntities(this.props.track.title)}>
          ${this._slicedTitle(((screen.width * 0.15)/12), this.props.track.title)}
        </li>`);
    }

    //from Stack Overflow user j08691 (space to &nbsp is mine)
    function htmlEntities(str) {
        return String(str).replace(/&/g, '&amp;').replace(/</g, '&lt;')
          .replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/ /g, '&nbsp');
    }

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
    var waveColors = WaveUtil.colors(this.props.track.weather_id);
    var waveform = window.Wavesurfer.create({
      container: `#waveform-${this.props.track.id}`,
      maxCanvasWidth: (screen.width * 0.4062),
      height: 60,
      waveColor: waveColors.waveColor,
      cursorColor: 'transparent',
      progressColor: waveColors.progressColor,
      barWidth: 1.75,
      normalize: true,
    });
    if (waveColors.BGColor)
      $(`#waveform-${this.props.track.id}`).css('background-color', waveColors.BGColor);
    const that = this;
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
          },
          success: (data) => console.log(data)
        });

        $(`#waveform-loading-${that.props.track.id}`).remove();
        var wave = $('#waveform-' + that.props.track.id + ' wave canvas');
        var waveWidth = wave.width();
        $(`#waveform-${that.props.track.id}`).append(
          `<canvas id="waveform-progress-${that.props.track.id}" width="${waveWidth}" height="60" style="z-index:1; position: absolute; top: 0px;">`
        );
        window.waveforms[`${that.props.track.id}`] = waveform;
      });
    } else {
        $(waveform.load(this.props.audio_url, this.props.track.peaks));
        $(`#waveform-${this.props.track.id}`).append(
          `<div id="waveform-loading-${this.props.track.id}"  style="z-index:1; position: absolute; top: 0px; width:${(screen.width * 0.4062)}px; height:45px; display:flex; flex-direction: row; align-items: center;"><h2 style="font-size: 20px;">Loading Waveform</h2><img src='https://res.cloudinary.com/cloud-sounds/image/upload/v1473033713/loading5_kluvdv.gif' height='40px' width='40px'/></div>`
        );
        $(`#waveform-loading-${that.props.track.id}`).remove();
        var wave = $('#waveform-' + that.props.track.id + ' wave canvas');
        var waveWidth = wave.width();
        $(`#waveform-${that.props.track.id}`).append(
          `<canvas id="waveform-progress-${that.props.track.id}" width="${waveWidth}" height="60" style="z-index:1; position: absolute; top: 0px;">`
        );
        window.waveforms[`${that.props.track.id}`] = waveform;
    }
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
      $(e.currentTarget).addClass('hidden');
      const commentsList = $(`#track-${trackID}-comments`);
      if (commentsList.hasClass('hidden')){
        commentsList.removeClass('hidden');
        const showButton = $(`#track-${trackID}-show-comments`);
        showButton.text(showButton.text().replace('show', 'hide')
          .replace('▼', '►'));
      }

    }
  }

  makeDeleteButton(){
    if (this.props.currentUser &&
        this.props.track.user_id === this.props.currentUser.user.id) {
        return (
          <button className='track-delete'
            onClick={this.deleteThisTrack}
            title="Delete track">
          </button>
        );
      }
  }

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

  makeLikeIcon() {
    if(this.props.track.liked){
      return (
        <img src=
          {"https://res.cloudinary.com/cloud-sounds/image/upload/w_40,h_40/v1472690716/icon-" +
              this.props.track.weather_id}
          className='icon-40 favorite-icon liked'
          onClick={this.toggleLike}
          id = {'icon'+this.props.track.id}
        />
    );
    } else {
      return (
        <img src=
          {"https://res.cloudinary.com/cloud-sounds/image/upload/w_40,h_40/v1472690716/icon-" +
              this.props.track.weather_id}
          className='icon-40 favorite-icon'
          onClick={this.toggleLike}
          id = {'icon'+this.props.track.id}
        />
    );
    }
  }

  toggleLike(e){
    const likeData = {like: {user_id: this.props.currentUser.user.id,
      track_id: this.props.track.id}};
    if ($(e.target).hasClass('liked')){
      this.props.unlike(likeData);
    } else {
      this.props.like(likeData);
    }
    $(`#icon${this.props.track.id}`).toggleClass('liked');
    $(`#${this.props.track.id}-like`).toggleClass('liked');

  }



  componentDidMount(){
    this.generateWaveform();
    //this.addTracktoPlaylist();
    $(".comment").keyup(this.listenForComments);
  }

  render() {
    return (
    <li key={'track-' + this.props.track.id}>
      <div className="track-item">
        <Link to={`tracks/${this.props.track.id}`}>
          <img src=
            {this.props.track.image_url
              .replace('upload', 'upload/w_160,h_160/r_10')}
            alt={this.props.track.title}
          />
        </Link>
        <div className=
          {"column " + "weather-" + this.props.track.weather_id + "-track"}>
          <div className = "flex-row">
            <button className="circle-play"
              id={this.props.track.id}
              data-src={this.props.track.audio_url}
              onClick={
                () => {
                  this.addTracktoPlaylist();
                  this.props.playTrack($(`#${this.props.track.id}`));
                }
              }>

            </button>
            <div className="info">
              <p className="track-user">
                <Link to={`users/${this.props.track.user_id}`}>
                  {this.props.track.username}
                </Link>
              </p>
              <p className="track-name">
                <Link to={`tracks/${this.props.track.id}`}>
                  {this.props.track.title}
                </Link>
              </p>
            </div>
            <div className="icons">
              {this.makeLikeIcon()}
            </div>
          </div>
          <div className="track-description">
            <div className="waveform"
              id={'waveform-' + this.props.track.id}>
            </div>
          </div>
          <input className="comment" type="text" id={`${this.props.track.id}-commentform`}placeholder="Write a comment"/>
          <ul className='track-item-buttons'>
            {this.makeLikeButton()}
            <button className='enqueue-track'
              onClick={this.addTracktoPlaylist}
              title="Add to playlist">
            </button>
            {this.makeDeleteButton()}
            <p className="data-ball hidden"
               id={`splash-track-${this.props.track.id}`}
               data-src={this.props.track.audio_url}
               data-img={this.props.track.image_url}
               data-title={this.props.track.title}
               data-weathername={this.props.track.weather_name}
            ></p>
          </ul>
        </div>
      </div>
      {new TrackCommentsIndex({
        comments: this.props.track.comments,
        deleteComment: this.props.deleteComment,
        currentUser: this.props.currentUser,
        track: this.props.track
      }).render()}
    </li>);
  }
}

export default TrackItem;
//TODO: do something with description{track.description}
