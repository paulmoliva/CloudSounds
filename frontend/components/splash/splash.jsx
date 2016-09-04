import React from 'react';
import { Link } from 'react-router';
import SessionForm from './session_form.jsx';
import {CloudinaryImageConstants} from '../../constants/cloudinary';

//audio
// import audiojs from '../../util/audiojs/audio.min';

class Splash extends React.Component {
  constructor(props){
    super(props);
    navigator.geolocation.getCurrentPosition((pos) => {
     this.location = {lat: pos.coords.latitude, long: pos.coords.longitude};
     this.requestData();
    });
    this.state = {
      currentUser: props.currentUser,
      username: "",
      password: "",
      email: "",
      avatar_url: "",
      errors: "",
      weather: {'name': 'Loading Weather...', 'main': {'temp': ''}}
    };
    this.hero = this.hero.bind(this);
    this.loginSubmit = this.loginSubmit.bind(this);
    this.signupSubmit = this.signupSubmit.bind(this);
    this.showErrors = this.showErrors.bind(this);
    this.guestLogin = this.guestLogin.bind(this);
  }

  componentDidMount(){
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


    </div>
  );}

  weatherGreeting() {
    if (this.state.weather.temp)
      return `It\'s ${Math.round(this.state.weather.temp)}℉ and ${this.state.weather.desc} in ${this.state.weather.location}`;
    else
      return 'It\'s 65℉ and Partly Cloudy in San Francisco';
    }

  loginSubmit(e) {
    e.preventDefault();
    const user = this.state;
    this.props.login({user});
    // const user = {
    //   e.currentTarget.
    // }
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

  requestData() {
    var request = new XMLHttpRequest();
    request.open('GET', `https://api.worldweatheronline.com/premium/v1/weather.ashx?q=${this.location.lat},${this.location.long}&includelocation=yes&format=json&key=8e4eeea070554e7481a01401160209`, true);

    let that = this;
    request.onload = () => {
      if (request.status >= 200 && request.status < 400) {
        let weatherJSON = $.parseJSON(request.responseText);
        let data = weatherJSON.data.current_condition[0];
        let location = weatherJSON.data.nearest_area[0].areaName[0].value;
        let weatherObj = {temp: data.temp_F,
                          desc: data.weatherDesc[0].value,
                          location: location};
        that.setState({weather: weatherObj});
      }
    };
    request.send();
  }

  render(){
    return this.hero();
  }
}


export default Splash;
