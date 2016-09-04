import React from 'react';
import { Link } from 'react-router';

import NavBar from '../navbar';
import TrackItem from './track_item';

class TrackShow extends React.Component {
  constructor(props) {
    super(props);
    const trackId = Object.keys(this.props.tracks)[0];
    this.track = this.props.tracks[trackId];
    this.addTrackToPlaylist = this.addTrackToPlaylist.bind(this);
    this.playTrack = this.playTrack.bind(this);
  }

  componentDidMount(){
    const path = this.props.location.pathname;
    const trackId = parseInt(path.split('/')[1]);
    this.props.fetchUserTracks({track_id: trackId});

    $('ol').click( e => {
      $(e.target).addClass('playing').siblings().removeClass('playing');
      window.audio.load($(e.target).attr('data-src'));
      $('#wrapper').removeClass('hidden');
      window.audio.play();
    });
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

  addTrackToPlaylist(){
    if (!$(`ol #track-${this.track.id}`).length){
      $('ol').append(
        `<li id='track-${this.track.id}'
        class='playlist-item'
        data-src=${this.track.audio_url}>
        ${this._slicedTitle(((screen.width * 0.15)/12), this.track.title)}
      </li>`);
    }
  }

  playTrack(el) {
    this.addTrackToPlaylist();
    $('#track-' + $(el).attr('id')).addClass('playing').siblings().removeClass('playing');
    let trackID = $(el).attr('id');
    window.audio.load($(el).attr('data-src'));
    $('#wrapper').removeClass('hidden');
    window.audio.play();
  }

  userName(){
    if (this.props.currentUser){
      return this.props.currentUser.user.username;
    }
    else{
      return '';
    }
  }

  userAvatar(){
    if (this.props.currentUser){
      return this.props.currentUser.user.avatar_url;
    }
  }

  render() {
    const trackId = Object.keys(this.props.tracks)[0];
    this.track = this.props.tracks[trackId];
    return (
      <div>
        <NavBar currentUser={this.props.currentUser.user} logout={this.props.logout}/>
        <div className='content margin'>
          <div className="flex-row home">
            <ul className='home-tracks'>
              <TrackItem
                key={this.track.id}
                track={this.track}
                currentUser={this.props.currentUser}
                playTrack={this.playTrack}
                deleteTrack={this.props.deleteTrack}
                fetchUserTracks={this.props.fetchUserTracks}
                createComment={this.props.createComment}
                deleteComment={this.props.deleteComment}
                />
            </ul>
            <nav className="sidebar">
              <h3>Description:</h3>
              <p>{this.track.description}</p>
            </nav>
          </div>
        </div>
      </div>
    );
  }
}

export default TrackShow;
