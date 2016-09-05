import React from 'react';
import { Link } from 'react-router';

import NavBar from '../navbar';
import {TracksList} from '../track/tracksindex';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.generateTracksArray = this.generateTracksArray.bind(this);
    this.renderTracksList = this.renderTracksList.bind(this);
  }

  componentDidMount() {
    this.props.fetchUserTracks(this.props.currentUser.user);

    $('ol').click( e => {
      $(e.target).addClass('playing').siblings().removeClass('playing');
      window.audio.load($(e.target).attr('data-src'));
      $('#wrapper').removeClass('hidden');
      window.audio.play();
    });
  }


  playTrack(el) {
    $('#track-' + $(el).attr('id')).addClass('playing').siblings().removeClass('playing');
    let trackID = $(el).attr('id');
    window.audio.load($(el).attr('data-src'));
    $('#wrapper').removeClass('hidden');
    window.audio.play();

    var width = (screen.width * 0.4062);
    var playingTrackID = $('.playing').attr('id').split('-')[1];
    var can = $('#waveform-' + playingTrackID)[0];
    console.log(can);
    //for detectng clicks on the waveform
    function getPosition(event)
    {
      var x = new Number();
      var y = new Number();
      var canvas = $('#waveform-' + playingTrackID)[0];

      if (event.x != undefined && event.y != undefined)
      {
        x = event.x;
        y = event.y;
      }
      else // Firefox method to get the position
      {
        x = event.clientX + document.body.scrollLeft +
            document.documentElement.scrollLeft;
        y = event.clientY + document.body.scrollTop +
            document.documentElement.scrollTop;
      }
      x -= canvas.offsetLeft;
      //console.log(canvas.offsetLeft);
      y -= canvas.offsetTop;
      var wave = $('#waveform-' + trackID + ' wave canvas');
      var waveWidth = wave.width();
      //console.log(( x / (screen.width * 0.4062) ));
      window.audio.skipTo( x / waveWidth);
    }

    can.addEventListener("click", getPosition, false);

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
      if (!isNaN(parseInt(key))){
        arr.push(this.props.tracks[key]);
      }
    }
      arr = arr.map ( track => {
        return track;
      } );
      return arr;
    }

    renderTracksList(){
      if (Object.keys(this.props.tracks).length > 1){
        return (
          <TracksList tracks={this.generateTracksArray()}
            playTrack={this.playTrack}
            currentUser={this.props.currentUser}
            deleteTrack={this.props.deleteTrack}
            fetchUserTracks={this.props.fetchUserTracks}
            createComment={this.props.createComment}
            deleteComment={this.props.deleteComment}
            />
        );
      }
    }

  render() {
    return (
    <div>
      <NavBar currentUser={this.props.currentUser.user} logout={this.props.logout}/>
      <div className='content margin'>
        <div className="flex-row home">
          {this.renderTracksList()}
        </div>
        {this.props.children}
      </div>
    </div>
  );}
}

export default Home;
