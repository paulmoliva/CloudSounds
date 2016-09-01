import React from 'react';
import { Link } from 'react-router';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.generateTracksArray = this.generateTracksArray.bind(this);
  }

componentWillMount() {
  this.props.fetchUserTracks(this.props.currentUser.user);
}

  userName(){
    if (this.props.currentUser){
      return this.props.currentUser.user.username;
    }
    else{
      return '';
    }
  }

  userAvatar(){
    if (this.props.currentUser){
      return this.props.currentUser.user.avatar_url;
    }
  }

  generateTracksArray() {
    let arr = [];
    for (let key in this.props.tracks){
    arr.push(this.props.tracks[key]);
      }
      arr = arr.map ( track => {
        return (<li>{track.title}</li>);
      } );
      return arr;
    }

  render() {
    debugger;
    return (
    <div className='content'>
      <p>{this.userName()}</p>
      <button onClick={this.props.logout}>Log out</button>
      <img src = {this.userAvatar()} />
      <Link to="/home/upload">Upload Track</Link>
      <ul className='column'>
        {this.generateTracksArray()}
      </ul>
      {this.props.children}
    </div>
  );}
}

export default Home;
