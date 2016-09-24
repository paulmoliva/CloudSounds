import React from 'react';
import { Link } from 'react-router';
import SessionForm from './session_form.jsx';
import {CloudinaryImageConstants} from '../../constants/cloudinary';
import {getLocation, requestData} from '../../util/weather_helpers.js';
import { playTrack, addOlListener, addTracktoPlaylist } from '../../util/player_helpers';
import SearchIndex from '../search/searchindex';
import {SearchItem} from '../search/searchitem';
import SplashTrackItem from './splash_track_item';
import Masonry from 'react-masonry-component';
class Splash extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      currentUser: props.currentUser,
      username: "",
      password: "",
      email: "",
      avatar_url: "",
      errors: "",
      weather: {
        temp: 65,
        desc: 'cloudy',
        city: 'San Francisco',
        weatherID: 2
       }
    };


    this.hero = this.hero.bind(this);
    this.loginSubmit = this.loginSubmit.bind(this);
    this.signupSubmit = this.signupSubmit.bind(this);
    this.showErrors = this.showErrors.bind(this);
    this.guestLogin = this.guestLogin.bind(this);
    this.playAll = this.playAll.bind(this);
    this.makeSearchResults = this.makeSearchResults.bind(this);
  }

  componentDidMount(){
    //if(!Object.keys(this.props.weather).length)
    this.props.fetchUserTracks({'weather_id': 3});
    getLocation(this, requestData, this.props.fetchUserTracks);
    const that = this;
    $(document).on( 'keyup', (e) => {
      let login = document.getElementById('loginModal');
      let signup = document.getElementById('signupModal');
      login = $(login);
      signup = $(signup);
      let esc;
      e.which === 27 ? esc = true : esc = false;
      if (esc && !signup.attr('class').match(/hidden/)){
        that.props.clearErrors();
        signup.toggleClass('hidden');
      }
      if (esc && !login.attr('class').match(/hidden/)){
        that.props.clearErrors();
        login.toggleClass('hidden');
      }
    });

    document.getElementById("image_upload_widget_opener")
    .addEventListener("click", function() {
      window.cloudinary.openUploadWidget(CloudinaryImageConstants,
        function(error, result) {
          if (!error){
            $('#image_url').val(result[0].secure_url);
            that.setState({
              ['avatar_url']: result[0].secure_url
            });
            $('#image_upload_widget_opener')[0].remove();
            $('#image_filename').text("Image Upload successful!");
          }
        });
      }, false);

      addOlListener();
  }

  update(field){
		return e => { this.setState({[field]: e.currentTarget.value }); };
	}

  hero() {return (
    <div className="content">

      <div className='hero'>

        <div className='form-modal hidden' id='loginModal'>
          <div className="closeX"
            onClick={()=>$('#loginModal').toggleClass('hidden')}>X
          </div>
          <form onSubmit={this.loginSubmit} className="login-form-box">
            <div className="session-form">
              <p>Welcome Back!</p>
              <ul className='errors'>{this.showErrors()}</ul>
               <p>Username</p>
                <input type="text"
                  className="login-input"
                  value={this.state.username}
                  onChange={this.update("username")}
                  className="login-input" />

                <p>Password</p>
                <input type="password"
                  className="login-input"
                  value={this.state.password}
                  onChange={this.update("password")}
                  />
              <br />
              <input type="submit" value="Login" />
            </div>
          </form>
        </div>

        <div className='form-modal hidden' id='signupModal'>
          <div className="closeX"
            onClick={()=>$('#signupModal').toggleClass('hidden')}>X
          </div>
          <form onSubmit={this.signupSubmit} className="signup-form-box">
            <div className="session-form">
              <p>Welcome to Cloud Sounds!</p>
              <ul className='errors'>{this.showErrors()}</ul>
                <p>Username:</p>
                <input type="text"
                  className="signup-input"
                  value={this.state.username}
                  onChange={this.update("username")}
                  className="signup-input" />
              <p>Email:</p>
                <input type="text"
                  className="signup-input"
                  value={this.state.email}
                  onChange={this.update("email")}
                  className="signup-input" />
                <label>
                  <p id='image_filename'></p>
                  <input type="hidden"
                    id='image_url'
                    name="image_url"
                    onChange={this.update('avatar_url')}/>
                  <div className="upload-header-button"
                    id ='image_upload_widget_opener'>Upload Avatar Image</div>
                </label>
                <p>Password:</p>
                <input type="password"
                  className="signup-input"
                  value={this.state.password}
                  onChange={this.update("password")}
                  />
                <br/>
              <input type="submit" value="Sign Up" />
            </div>
          </form>
        </div>

        <nav className='hero-header'>
          <div className='logo-holder'>
            <img className='logo' src='../assets/logo.png' />
            <aside className='logo-after'>CLOUDSOUNDS</aside>
          </div>
          <ul className='header-buttons'>
            <li className='sign-in button'
              onClick={this.showLoginForm}>Sign In</li>
            <li className='sign-up button'
              onClick={this.showSignupForm}>Create Account</li>
          </ul>
        </nav>
        <div className="hero-box">
          <h3>
            {this.weatherGreeting()}
          </h3>
          <h3>Get the music to match.</h3>
          <button className='sign-up demo button'
            onClick={this.guestLogin}>Guest Login</button>
        </div>
      </div>
      <div className="search">

        <input type="text"
          autoComplete="nope"
          id="search"
          placeholder="Search for tracks"
          onChange={ e => {
            this.props.loading({results: 'loading'});
            $.get('/api/search?' + $(e.target).val(), (results) => this.props.receiveSearchResults(results) );
            const that = this;
            $(document).on('click', function (eve) {
              if($(eve.target).closest('.search-results').length === 0) {
                $('#search').val('');
                that.props.receiveSearchResults({});
              }
            });
          }}>

        </input>

        {this.makeSearchResults()}
        <p> or </p>
        <button className="upload" onClick={this.guestLogin}>Upload your own</button>
      </div>
      <h3>Hear what's coming down today</h3>
      {Object.keys(this.props.tracks).length ? (<Masonry
          className={'my-gallery-class'}
          elementType={'ul'}
          options={{
            columnWidth: 212,
            gutter: 15,
            fitWidth: true
          }}
          disableImagesLoaded={false}
          updateOnEachImageLoad={false}
      >   <button onClick={this.playAll}
                  className='upload play-all'>Play All</button>
          {this.mapTracksToItems()}
      </Masonry>) : <img src="https://res.cloudinary.com/cloud-sounds/image/upload/v1473033713/loading5_kluvdv.gif" />}
    </div>
  );}

  makeSearchResults(){
    if(this.props.results)return (<SearchIndex loading={this.props.results.loading}
      results={this.props.results}/>);
  }

  weatherGreeting() {
    if (Object.keys(this.props.weather).length)
      return `It\'s ${Math.round(this.props.weather.temp)}℉ and ${this.props.weather.desc} in ${this.props.weather.city}`;
    else
      return "It's 65℉ and cloudy in San Francisco.";
  }

  mapTracksToItems(){
    let result = [];
    for(let key in this.props.tracks){
      result.push(this.props.tracks[key]);
    }
    return result.map( (el) => <SplashTrackItem track={el} key={el.id} /> ).reverse();
  }

  loginSubmit(e) {
    e.preventDefault();
    const user = this.state;
    this.props.login({user});
  }

  guestLogin() {
    const user = {currentUser: null,
      username: "Guest",
      password: "password",
      email: "",
      avatar_url: ""};
    this.props.login({user});
  }

  signupSubmit(e) {
    e.preventDefault();
    const user = this.state;
    this.props.signup({user});
  }

  showLoginForm(){
    let form = document.getElementById('loginModal');
    $(form).toggleClass('hidden');
  }

  showSignupForm(){
    let form = document.getElementById('signupModal');
    $(form).toggleClass('hidden');
  }

  showErrors(){
    let errors =  this.props.errors;
    return errors.map( (error)=> {
      return (<li className='error' key={error}>{error}</li>);
    } );
  }

  playAll(){
    $('.album').each( (i, el) => {
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

  render(){
    return this.hero();
  }
}

export default Splash;
