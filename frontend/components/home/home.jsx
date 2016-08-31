import React from 'react';

class Home extends React.Component {
  constructor(props) {
    super(props);
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

  render() {return (
    <div className='content'>
      <p>{this.userName()}</p>
      <button onClick={this.props.logout}>Log out</button>
      <img src = {this.userAvatar()} />
    </div>
  );}
}

export default Home;
