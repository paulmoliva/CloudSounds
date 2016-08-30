import React from 'react';

class Home extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {return (
    <div className='content'>
      <p>{this.props.currentUser.user.username}</p>
      <button onClick={this.props.logout}>Log out</button>
    </div>
  );}
}

export default Home;
