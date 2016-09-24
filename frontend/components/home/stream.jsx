import React from 'react';
import { Link } from 'react-router';

import NavBar from '../navbar';
import {TracksList} from '../track/tracksindex';

import {playTrack,
        addTracktoPlaylist,
        addOlListener,
        installWaveformListener} from '../../util/player_helpers';
import {getLocation, requestData} from '../../util/weather_helpers';

class Stream extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.weather;
    this.generateTracksArray = this.generateTracksArray.bind(this);
    this.renderTracksList = this.renderTracksList.bind(this);
    this.generateNavBar = this.generateNavBar.bind(this);
    this.generateHeaderLinks = this.generateHeaderLinks.bind(this);
    this.renderWeatherBlurb = this.renderWeatherBlurb.bind(this);
  }

  componentDidMount() {
    if(!Object.keys(this.props.weather).length)
      getLocation(this, requestData, this.props.fetchUserTracks);
    else this.props.fetchUserTracks({'weather_id': this.props.weather.weatherID});
    this.setState({weather: this.props.weather});
    addOlListener();
    setTimeout( ()=> installWaveformListener(), 500);
  }

  componentWillReceiveProps(nextProps){
    if (nextProps.tracks !== this.props.tracks)
      setTimeout( ()=> installWaveformListener(), 500);
  }


  generateNavBar(){
    if (this.props.currentUser){
      return (
        <NavBar currentUser={this.props.currentUser.user}
          logout={this.props.logout}
          loading={this.props.loading}
          receiveSearchResults={this.props.receiveSearchResults}
          results={this.props.results}/>
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
            loading={this.props.tracks.loading}
            />
        );
      } else return (<div className='home-tracks'></div>);
    }

    renderWeatherBlurb(){
      let weather = this.state.weather;
      if (!weather && Object.keys(this.props.weather).length) {
        weather = this.props.weather;
        const blurb = `Here are some tracks for ${weather.desc.toLowerCase()} weather`;
        return (
          <h3 className='weather-blurb'>{blurb}</h3>
        );
      } else if (Object.keys(this.props.weather).length) {
        weather = this.state.weather;
        const blurb = `Here are some tracks for ${weather.desc.toLowerCase()} weather`;
        return (
          <h3 className='weather-blurb'>{blurb}</h3>
        );
      } else {
        getLocation(this, requestData, this.props.fetchUserTracks);
        return (<h3 className='weather-blurb'>Loading...
        <img src="https://res.cloudinary.com/cloud-sounds/image/upload/w_18/v1473033713/loading5_kluvdv.gif" />
        </h3>);
      }
    }

    playAll(){
      $('.data-ball').each( (i, el) => {
        let track = {};
        track.id = $(el).attr('id').match(/\d+/g);
        track.audio_url = $(el).attr('data-src');
        track.image_url = $(el).attr('data-img');
        track.title = $(el).attr('data-title');
        track.weather_name = $(el).attr('data-weathername');
        addTracktoPlaylist(track);
      });
      playTrack($('ol li')[0]);
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
          <nav className="sidebar-stream">

              <select id="select1"
                onChange={(e) => {
                  if ($(e.target).val() !== '0'){
                    this.props.fetchUserTracks({'weather_id': $(e.target).val()});
                    this.setState({weather: {desc:$('#select1 option:selected').text()}});
                  }
                }}
                name="select1">
                <option value="0">Choose your weather mood:</option>
                <option value="1">Sunny</option>
                <option value="2">Rainy</option>
                <option value="3">Cloudy</option>
                <option value="4">Foggy</option>
                <option value="5">Stormy</option>
              </select>
              <button onClick={this.playAll}
                      className='upload play-all centered'>
                      Play All
              </button>
          </nav>
        </div>
        {this.props.children}
      </div>
    </div>
  );}
}

export default Stream;
