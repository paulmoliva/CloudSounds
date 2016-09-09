import React from 'react';
import { Link } from 'react-router';
import SplashContainer from './splash/splash_container';
import {playTrack} from '../util/player_helpers';
import {getLocation, requestData} from '../util/weather_helpers';

class App extends React.Component {

  componentDidMount(){
    this.setUpPlayer();

  }

setUpPlayer(){
    let a = window.audiojs.createAll({
      trackEnded: function() {
        let playing = $('.playing');
        var next = $('.playing').next();
        if (!next.length){
          //next = $('ol li').first();
          $('#wrapper').toggleClass('hidden');
        } else {
          const trackId = next.attr('id').split('-')[1];
          playTrack($(next[0]));
        }
      }
    });

    // Strap the player onto the window
    window.audio = a[0];

    //set upclick handlers for next, back, and volume, playlist show/hide
    $('.skip').on('click', () => {
      var next = $('li.playing').next();
      if (!next.length) next = $('ol li').first();
      next.click();
    });

    $('.back').on('click', () => {
      //get length of progress bar in px
      const progress = parseInt($('.progress').css('width').match(/\d+/g));

      //if near track beginning, play previous track.
      if(progress < 5){
        var prev = $('li.playing').prev();
        if (!prev.length) prev = $('ol li').last();
        prev.click();
      //else restart current track
    } else {
      window.audio.skipTo(0);
    }
    });

    $('#playlist-queue').on('click', () => {
      $('#playlist').toggleClass('hidden');
    });

    $('.volume').hover( () => {
      $('.volume-control').toggleClass('hidden');
    });

    //set volume by clicking
    const player = $('audio')[0];
    $('.volume-control').on('click', (e) => {
      var offset = $('.volume-control').offset();
      var relY = e.pageY - offset.top;
      relY = 60 - relY;
      player.volume = relY / 60;
      console.log(relY);
      $('.volume-bar').css('height', `${relY}px`);
      $('.volume').attr('data-volume', `${relY}`);
      $('.volume').attr('data-prevvolume', `${relY}`);
    });

    //default volume attribute of 60
    $('.volume').attr('data-volume', `60`);
    $('.volume').attr('data-prevvolume', `60`);

    //mute volume by clicking volume icon
    $('.volume').on('click', (e) => {
      if (e.target.className !== 'volume') return;
      const currentVolume = parseInt($('.volume').attr('data-volume'));
      console.log(currentVolume);
      if (currentVolume > 0 || isNaN(currentVolume)){
        player.volume = 0.0;
        // $('.volume').toggleClass('muted');
        $('.volume-bar').css('height', `0px`);
        $('.volume').attr('data-volume', '0');
      } else {
        const prevvolume = parseInt($('.volume').attr('data-prevvolume'));
        player.volume = prevvolume / 60;
        // $('.volume').toggleClass('muted');
        $('.volume-bar').css('height', `${prevvolume}px`);
        $('.volume').attr('data-volume', prevvolume);
      }
    });
  }



  render(){
    return (
      <div>
        <ol id='playlist' className='hidden'>
        </ol>
        {this.props.children}

        <div id="wrapper" className='hidden'>

          <audio preload></audio>
        </div>



      </div>
    );
  }
}





export default App;
