import React from 'react';
//Router
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
//Components
import App from './App';
import SplashContainer from './splash/splash_container';
import HomeContainer from './home/home_container';
import StreamContainer from './home/stream_container';
import UploadContainer from './track/upload_container';
import UsersContainer from './users/users_container';
import TrackContainer from './track/track_container';
import {Test} from './users/test';
//



class AppRouter extends React.Component{
  constructor(props){
    super(props);
    this._ensureLoggedIn = this._ensureLoggedIn.bind(this);
    this._redirectIfLoggedIn = this._redirectIfLoggedIn.bind(this);
  }

  _ensureLoggedIn(nextState, replace){
    const currentState = this.context.store.getState();
    const currentUser = currentState.session.currentUser;
    if (!currentUser) {
      replace('/');
    }
  }

  _redirectIfLoggedIn(nextState, replace){
    const currentState = this.context.store.getState();
    const currentUser = currentState.session.currentUser;
    if (currentUser) {
      replace('/home');
    }
  }



  render(){
    return(
      <Router history={ hashHistory }>
        <Route path="/" component={ App }>
          <IndexRoute component={ SplashContainer } onEnter={this._redirectIfLoggedIn} />
          <Route path="home" component={ HomeContainer } onEnter={ this._ensureLoggedIn }>
            <Route path='upload' component={ UploadContainer } onEnter={this._ensureLoggedIn} />
          </Route>
          <Route path="stream" component={ StreamContainer } onEnter={ this._ensureLoggedIn } />
          <Route path="users/:id" component={ UsersContainer }/>
          <Route path="tracks/:id" component={ TrackContainer }/>
        </Route>
      </Router>
    );
  }
}

AppRouter.contextTypes = {
  store: React.PropTypes.object.isRequired
};

export default AppRouter;
