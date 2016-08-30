import React from 'react';
import { Link } from 'react-router';
import SessionForm from './session_form.jsx';

class Splash extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      currentUser: props.currentUser,
      username: "",
      password: ""
    };
    this.hero = this.hero.bind(this);
    this.loginSubmit = this.loginSubmit.bind(this);
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
    <div className='hero'>
      <div className='form-modal hidden' id='loginModal'>
        <form onSubmit={this.loginSubmit} className="login-form-box">
          Welcome to Cloud Sounds!
          <br/>

          <div className="login-form">

            <label> Username:
              <input type="text"
                className="login-input"
                value={this.state.username}
								onChange={this.update("username")}
								className="login-input" />
                 />
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
      <nav className='hero-header'>
        <div className='logo-holder'>
          <img className='logo' src='../assets/logo.png' />
          <aside className='logo-after'>CLOUDSOUNDS</aside>
        </div>
        <ul className='header-buttons'>
          <li className='sign-in button' onClick={this.showSessionForm}>Sign In</li>
          <li className='sign-up button' onClick={this.showSessionForm}>Create Account</li>
        </ul>
      </nav>
      <div className="hero-box">
        <h3>It's sunny and 65℉ in San Francisco</h3>
        <h3>Get the music to match.</h3>
        <button className='sign-up demo button'>Guest Login</button>
      </div>
    </div>
  );}

  loginSubmit(e) {
    const user = this.state;
    this.props.login({user});
    // const user = {
    //   e.currentTarget.
    // }
  }

  showSessionForm(){
    let form = document.getElementById('loginModal');
    $(form).toggleClass('hidden');
  }

  render(){
    return this.hero();
  }
}


export default Splash;
