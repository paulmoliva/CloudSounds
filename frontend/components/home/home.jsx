import React from 'react';
import { Link } from 'react-router';

import NavBar from '../navbar';
import {TracksList} from '../track/tracksindex';

import {playTrack, addOlListener} from '../../util/player_helpers';
import {getLocation, requestData} from '../../util/weather_helpers';

class Home extends React.Component {
  constructor(props) {
    super(props);

    getLocation(this, requestData);

    this.generateTracksArray = this.generateTracksArray.bind(this);
    this.renderTracksList = this.renderTracksList.bind(this);
    this.generateNavBar = this.generateNavBar.bind(this);
  }

  componentDidMount() {
    this.props.fetchUserTracks(this.props.currentUser.user);
    addOlListener();
  }

  generateNavBar(){
    if (this.props.currentUser){
      return (
        <NavBar currentUser={this.props.currentUser.user} logout={this.props.logout}/>
      );
    } else return '';
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
    });
    return arr;
  }

    renderTracksList(){
      if (Object.keys(this.props.tracks).length > 1){
        return (
          <TracksList tracks={this.generateTracksArray()}
            playTrack={playTrack}
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
      {this.generateNavBar()}
      <div className='content margin'>
        <div className="flex-row home">
          {this.renderTracksList()}
          <nav className="sidebar">
            <h3>Trending Comments</h3>
              <ul className="sidebarlist">
                <li className='sidebar-list-item column'>
                  <div className="sidebar-track-data   flex-row">
                    <Link to="/users/12">
                    <img className='circle-avatar' src='https://res.cloudinary.com/cloud-sounds/image/upload//c_crop,g_face/c_scale,h_26,w_26/r_30/v1473029683/kvkoxddeqysnqzippxjn.jpg' />
                    </Link>
                    <ul className='column comment'>
                      <Link to="/users/12">
                      <li className='sidebar-playlist-name comment'>Paul Oliva</li>
                      </Link>
                    </ul>
                  </div>
                </li>
                <p className='comment'>
                  Click my user name to see an example user show page containing tracks.
                </p>
              </ul>
          </nav>
        </div>
        {this.props.children}
      </div>
    </div>
  );}
}

export default Home;
