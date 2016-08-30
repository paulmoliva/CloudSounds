import React from 'react';
import { Link } from 'react-router';
import SessionForm from './session_form.jsx';

class Splash extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      currentUser: props.currentUser,
      username: "",
      password: "",
      email: "",
      avatar_url: "",
      errors: ""
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
  }

  update(field){
		return e => { this.setState({[field]: e.currentTarget.value }); };
	}




  formModal() {
    (
    <div className ="login-modal">
      <SessionForm />
    </div>
    );
  }

  hero() {return (
    <div className="content">

      <div className='hero'>

        <div className='form-modal hidden' id='loginModal'>
          <form onSubmit={this.loginSubmit} className="login-form-box">


            <div className="session-form">
              <p>Welcome to Cloud Sounds!</p>
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



              <p>Avatar URL:</p>
              <input type="text"
                className="signup-input"
                value={this.state.avatar_url}
                onChange={this.update("avatar_url")}
                className="signup-input"
                label="Avatar URL" />

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
            <li className='sign-in button' onClick={this.showLoginForm}>Sign In</li>
            <li className='sign-up button' onClick={this.showSignupForm}>Create Account</li>
          </ul>
        </nav>
        <div className="hero-box">
          <h3>It's sunny and 65℉ in San Francisco</h3>
          <h3>Get the music to match.</h3>
          <button className='sign-up demo button' onClick={this.guestLogin}>Guest Login</button>
        </div>
      </div>
    </div>
  );}

  loginSubmit(e) {
    e.preventDefault();
    const user = this.state;
    this.props.login({user});
    // const user = {
    //   e.currentTarget.
    // }
  }

  guestLogin() {
    const user = {currentUser: null, username: "Guest", password: "password", email: "", avatar_url: ""};
    this.props.login({user});
  }

  signupSubmit(e) {
    e.preventDefault();
    const user = this.state;
    console.log(user);
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

  render(){
    return this.hero();
  }
}


export default Splash;
