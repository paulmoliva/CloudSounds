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
      <UploadForm currentUser={this.props.currentUser} createTrack={this.props.createTrack}/>
    </div>
    );
  }
}

export default Upload;
