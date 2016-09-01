import React from 'react';
import { Link } from 'react-router';

import NavBar from '../navbar';
import {TracksList} from '../track/tracksindex';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.generateTracksArray = this.generateTracksArray.bind(this);
  }

  componentDidMount() {
    this.props.fetchUserTracks(this.props.currentUser.user);
  }

  playTrack(e) {
    e.preventDefault();
    $(this).addClass('playing').siblings().removeClass('playing');


    window.audio.load($(e.currentTarget).attr('data-src'));
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
    arr.push(this.props.tracks[key]);
      }
      arr = arr.map ( track => {
        return track;
      } );
      return arr;
    }

  render() {
    return (
    <div>
      <NavBar currentUser={this.props.currentUser.user} logout={this.props.logout}/>
      <div className='content margin'>

        <div className="flex-row home">

          <TracksList tracks={this.generateTracksArray()}
            playTrack={this.playTrack}
            currentUser={this.props.currentUser}
            deleteTrack={this.props.deleteTrack}
            fetchUserTracks={this.props.fetchUserTracks}/>

        </div>
        {this.props.children}
      </div>
    </div>
  );}
}

export default Home;
