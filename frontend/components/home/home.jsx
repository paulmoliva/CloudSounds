import React from 'react';
import { Link } from 'react-router';

import NavBar from '../navbar';
import {TracksList} from '../track/tracksindex';

import {playTrack, addOlListener} from '../../util/player_helpers';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.generateTracksArray = this.generateTracksArray.bind(this);
    this.renderTracksList = this.renderTracksList.bind(this);
  }

  componentDidMount() {
    this.props.fetchUserTracks(this.props.currentUser.user);
    addOlListener();
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
      <NavBar currentUser={this.props.currentUser.user} logout={this.props.logout}/>
      <div className='content margin'>
        <div className="flex-row home">
          {this.renderTracksList()}
        </div>
        {this.props.children}
      </div>
    </div>
  );}
}

export default Home;
