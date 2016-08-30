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
      avatar_url: ""
    };
    this.hero = this.hero.bind(this);
    this.loginSubmit = this.loginSubmit.bind(this);
    this.signupSubmit = this.signupSubmit.bind(this);
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
            Welcome to Cloud Sounds!
            <br/>

            <div className="session-form">

              <label> Username:
                <input type="text"
                  className="login-input"
                  value={this.state.username}
                  onChange={this.update("username")}
                  className="login-input" />

              </label>


              <label> Password:
                <input type="password"
                  className="login-input"
                  value={this.state.password}
                  onChange={this.update("password")}
                  />
              </label>

              <br />
              <input type="submit" value="Login" />
            </div>
          </form>
        </div>

        <div className='form-modal hidden' id='signupModal'>
          <form onSubmit={this.signupSubmit} className="signup-form-box">
            Welcome to Cloud Sounds!
            <br/>

            <div className="session-form">

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
          <button className='sign-up demo button'>Guest Login</button>
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

  signupSubmit(e) {
    e.preventDefault();
    debugger
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

  render(){
    return this.hero();
  }
}


export default Splash;
