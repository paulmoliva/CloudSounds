import React from 'react';
import { Link } from 'react-router';

import NavBar from '../navbar';
import {TracksList} from '../track/tracksindex';

class UserShow extends React.Component {
  constructor(props) {
    super(props);
    this.generateTracksArray = this.generateTracksArray.bind(this);
    this.renderTracksList = this.renderTracksList.bind(this);
  }

  componentDidMount() {
    const path = this.props.location.pathname;
    const userId = parseInt(path.split('/')[2]);

    this.props.fetchUserTracks({id: userId});
    $('ol').click( e => {
      $(e.target).addClass('playing').siblings().removeClass('playing');
      window.audio.load($(e.target).attr('data-src'));
      $('#wrapper').removeClass('hidden');
      window.audio.play();
    });
  }

  playTrack(e) {
    e.preventDefault();
    $('#track-' + $(e.currentTarget).attr('id')).addClass('playing').siblings().removeClass('playing');
    let trackID = $(e.currentTarget).attr('id');
    window.audio.load($(e.currentTarget).attr('data-src'));
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

  generateTracksArray() {
    let arr = [];
    for (let key in this.props.tracks){
      if (!isNaN(parseInt(key))){
        arr.push(this.props.tracks[key]);
      }
    }
      arr = arr.map ( track => {
        return track;
      } );
      return arr;
    }

    renderTracksList(){
      if (Object.keys(this.props.tracks).length > 1){
        return (
          <TracksList tracks={this.generateTracksArray()}
            playTrack={this.playTrack}
            currentUser={this.props.currentUser}
            deleteTrack={this.props.deleteTrack}
            fetchUserTracks={this.props.fetchUserTracks}
            createComment={this.props.createComment}
            deleteComment={this.props.deleteComment}
          />
        );
      }
    }

  render() {
    return (
    <div>
      <NavBar currentUser={this.props.currentUser.user} logout={this.props.logout}/>
      <div className='content margin'>
        <h1>{this.props.tracks.username}</h1>
        <div className="flex-row home">
          {this.renderTracksList()}
        </div>
        {this.props.children}
      </div>
    </div>
  );}
}

export default UserShow;
