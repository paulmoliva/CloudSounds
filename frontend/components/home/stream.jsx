import React from 'react';
import { Link } from 'react-router';

import NavBar from '../navbar';
import {TracksList} from '../track/tracksindex';

import {playTrack, addOlListener} from '../../util/player_helpers';
import {getLocation, requestData} from '../../util/weather_helpers';

class Stream extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      weather: {
        temp: 65,
        desc: '',
        city: 'San Francisco',
        weatherID: 2
       }
    };

    this.generateTracksArray = this.generateTracksArray.bind(this);
    this.renderTracksList = this.renderTracksList.bind(this);
    this.generateNavBar = this.generateNavBar.bind(this);
    this.generateHeaderLinks = this.generateHeaderLinks.bind(this);
    this.renderWeatherBlurb = this.renderWeatherBlurb.bind(this);
  }

  componentDidMount() {

    getLocation(this, requestData, this.props.fetchUserTracks);

    addOlListener();
  }


  generateNavBar(){
    if (this.props.currentUser){
      return (
        <NavBar currentUser={this.props.currentUser.user} logout={this.props.logout}/>
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
            />
        );
      }
    }

    renderWeatherBlurb(){
      const weather =this.state.weather;
      const blurb = `Here are some tracks for today's ${weather.desc} weather`;
      return (
        <h3 className='weather-blurb'>{blurb}</h3>
      );
    }

  render() {
    return (
    <div>
      {this.generateNavBar()}
      <div className='content margin'>
        {this.generateHeaderLinks()}
        {this.renderWeatherBlurb()}
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

export default Stream;
