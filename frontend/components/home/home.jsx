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

  render() {return (
    <div className='content'>
      <p>{this.userName()}</p>
      <button onClick={this.props.logout}>Log out</button>
    </div>
  );}
}

export default Home;
