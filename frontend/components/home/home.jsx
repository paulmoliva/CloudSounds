import React from 'react';
import { Link } from 'react-router';

import NavBar from '../navbar';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.generateTracksArray = this.generateTracksArray.bind(this);
    this.tracksList = this.tracksList.bind(this);
  }

  componentDidMount() {
    this.props.fetchUserTracks(this.props.currentUser.user);
  }

  playTrack(e) {
    e.preventDefault();
    $(this).addClass('playing').siblings().removeClass('playing');
    debugger;

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

  tracksList() {
    const tracks = this.generateTracksArray();
    return tracks.map ( track => {
      return (
        <li>
          <div className="track-item">
            <img src={track.image_url.replace('upload', 'upload/w_160,h_160/r_10')} alt="" />
            <div className="column sunny-track sunny-track">
              <div className = "flex-row">
                <button className="circle-play" data-src={track.audio_url} onClick={this.playTrack}></button>
                <div className="info">
                  <p className="track-user">
                    {this.props.currentUser.user.username}
                  </p>
                  <p className="track-name">
                    {track.title}
                  </p>
                </div>
                <div className="icons">

                  <img src="http://res.cloudinary.com/cloud-sounds/image/upload/v1472690716/sunny-icon_hlbceo.png" className='icon-40 favorite-icon' />
                </div>
              </div>
              <div className="track-description">
                {track.description}
              </div>
              <input className="comment" type="text" placeholder="Write a comment"/>
              <button className='track-favorite'>24</button>
            </div>
          </div>
        </li>
      );
    }
  );
  }

  render() {
    return (
    <div>
      <NavBar currentUser={this.props.currentUser.user} />
      <div className='content'>
        <p>{this.userName()}</p>
        <button onClick={this.props.logout}>Log out</button>
        <Link to="/home/upload">Upload Track</Link>
        <div className="flex-row home">
          <ul className='home-tracks'>
            {this.tracksList()}
          </ul>
        </div>
        {this.props.children}
      </div>
    </div>
  );}
}

export default Home;
