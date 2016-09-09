import React from 'react';
import { Link } from 'react-router';

import NavBar from '../navbar';
import {TracksList} from '../track/tracksindex';

import {playTrack, addOlListener, installWaveformListener} from '../../util/player_helpers';
import {getLocation, requestData} from '../../util/weather_helpers';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      weather: {
        temp: 65,
        desc: 'cloudy',
        city: 'San Francisco',
        weatherID: 2
       }
    };

    this.generateTracksArray = this.generateTracksArray.bind(this);
    this.renderTracksList = this.renderTracksList.bind(this);
    this.generateNavBar = this.generateNavBar.bind(this);
    this.generateHeaderLinks = this.generateHeaderLinks.bind(this);
  }

  componentDidMount() {

    this.props.fetchUserTracks(this.props.currentUser.user);
    installWaveformListener();
    addOlListener();
  }


  generateNavBar(){
    if (this.props.currentUser){
      return (
        <NavBar currentUser={this.props.currentUser.user}
          logout={this.props.logout}
          receiveSearchResults={this.props.receiveSearchResults}
          results={this.props.results}
          />
      );
    } else return '';
  }

  generateHeaderLinks(){
    const location = this.props.location.pathname;
    if( location === '/home'){
      return (
        <div className='header-links-row'>
          <Link to="home">
            <h2 className='header-link active'>Home</h2>
          </Link>
          <Link to="stream">
            <h2 className='header-link'>Stream</h2>
          </Link>
        </div>
      );
    } else if (location === '/stream'){
      return (
        <div className='header-links-row'>
          <Link to="home">
            <h2 className='header-link'>Home</h2>
          </Link>
          <Link to="stream">
            <h2 className='header-link active'>Stream</h2>
          </Link>
        </div>
      );
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
            like={this.props.like}
            unlike={this.props.unlike}
            />
        );
      } else return (<div className='home-tracks'></div>);
    }

  render() {
    return (
    <div>
      {this.generateNavBar()}
      <div className='content margin'>
        {this.generateHeaderLinks()}
        <h3 className="weather-blurb">Tracks you've uploaded</h3>
        <div className="flex-row home">
          {this.renderTracksList()}
          <nav className="sidebar">
            <h3>Trending Comments</h3>

          </nav>
        </div>
        {this.props.children}
      </div>
    </div>
  );}
}

export default Home;
