import React from 'react';
import UploadForm from './upload_form';
import { Link } from 'react-router';

class Upload extends React.Component {
  constructor(props){
    super(props);
  }

  render() {
    return (
    <div>
      <h1>upload</h1>
      <UploadForm currentUser={this.props.currentUser} createTrack={this.props.createTrack}/>
    </div>
    );
  }
}

export default Upload;
