import React from 'react';
import {CloudinaryAudioConstants,
        CloudinaryImageConstants} from '../../constants/cloudinary';
import {hashHistory} from 'react-router';

class UploadForm extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      title: '',
      description: '',
      user_id: this.props.currentUser.user.id,
      audio_url: '',
      image_url: '',
      weather_id: '',
      errors: []
    };
    this.uploadSubmit = this.uploadSubmit.bind(this);
  }

  componentDidMount(){
    const that=this;

    $(document).on( 'keyup', (e) => {
      let login = document.getElementById('loginModal');
      let signup = document.getElementById('signupModal');
      login = $(login);
      signup = $(signup);
      let esc;
      e.which === 27 ? esc = true : esc = false;
      if (esc){
        hashHistory.push('/home');
      }

    });

    document.getElementById("upload_widget_opener")
      .addEventListener("click", function() {
      window.cloudinary.openUploadWidget(CloudinaryAudioConstants,
        function(error, result) {
           if (!error){

             $('#audio_url').val(result[0].secure_url);
             that.setState({
               ['audio_url']: result[0].secure_url
             });
             $('#upload_widget_opener')[0].remove();
             $('#audio_filename').text("MP3 Upload successful!");
           }
         });
        }, false);

    document.getElementById("image_upload_widget_opener")
      .addEventListener("click", function() {
      window.cloudinary.openUploadWidget(CloudinaryImageConstants,
        function(error, result) {
           if (!error){

             $('#image_url').val(result[0].secure_url);
             that.setState({
               ['image_url']: result[0].secure_url
             });
             $('#image_upload_widget_opener')[0].remove();
             $('#image_filename').text("Image Upload successful!");
           }
         });
        }, false);
  }

  update(field){
    return e => { this.setState({[field]: e.currentTarget.value }); };
  }

  addError(message){
    $('.errors').append(`<li class="error">${message}</li>`);
  }

  uploadSubmit(e) {
    e.preventDefault();
    const track = this.state;
    $('.errors').empty();
      if (track.title === ""){
        this.addError('Title is a reuired field.');
      } else if(track.weather_id === ""){
        this.addError('Track weather type is required.');
      } else if(track.audio_url === ""){
        this.addError('Please upload an MP3 file to proceed.');
      } else{
        this.props.createTrack({track});
      }
  }


  render() {return(
    <div className='upload-modal'>
      <form className="uploadForm" onSubmit={this.uploadSubmit}>
        <ul className='errors'></ul>
        <label>
          <p>Title</p>
          <input type="text"
            value={this.state.title}
            onChange={this.update('title')}/>

        </label>

        <label>
          <p>Description</p>
          <input type="text"
            value={this.state.description}
            onChange={this.update('description')}/>

        </label>
        <ul>
          <label>
            <p id='audio_filename'></p>
            <input type="hidden"
              id='audio_url'
              name="audio_url"
              onChange={this.update('audio_url')}/>

            <div className="upload-header-button"
              id ='upload_widget_opener'>Upload MP3</div>
          </label>

          <label>
            <p id='image_filename'></p>
            <input type="hidden"
              id='image_url'
              name="image_url"
              onChange={this.update('image_url')}/>

            <div className="upload-header-button"
              id ='image_upload_widget_opener'>Upload Image</div>
          </label>
        </ul>

        <label className='column weather-radios'>
          <p>Weather Type:</p>
          <div className='column left'>

            <div>
              <input type="radio" name="weather" value="1"
                onChange={this.update('weather_id')}/> Sunny
              </div>
              <div>
                <input type="radio" name="weather" value="2"
                  onChange={this.update('weather_id')}/> Rainy
                </div>
                <div>
                  <input type="radio" name="weather" value="3"
                    onChange={this.update('weather_id')}/> Cloudy
                  </div>
                  <div>
                    <input type="radio" name="weather" value="4"
                      onChange={this.update('weather_id')}/> Foggy
                    </div>
                    <div>
                      <input type="radio" name="weather" value="5"
                        onChange={this.update('weather_id')}/> Stormy
                      </div>
                    </div>
                  </label>
                  <input type="submit" value="Create Track" />

                </form>
    </div>
    );
  }
}

export default UploadForm;
