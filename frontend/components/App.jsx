import React from 'react';
import { Link } from 'react-router';
import SplashContainer from './splash/splash_container';
import {playTrack} from '../util/player_helpers';

class App extends React.Component {



  componentDidMount(){
    this.setUpPlayer();
  }

setUpPlayer(){
    let a = window.audiojs.createAll({
      trackEnded: function() {
        let playing = $('.playing');
        var next = $('.playing').next();
        if (!next.length) next = $('ol li').first();

        const trackId = next.attr('id').split('-')[1];
        playTrack(trackId);

        // next.addClass('playing').siblings().removeClass('playing');
        // window.audio.load($(next).attr('data-src'));
        // window.audio.play();
      }
    });

    // Load in the first track
    window.audio = a[0];
    let first = $('ol a').attr('data-src');
    $('ol li').first().addClass('playing');
    //window.audio.load(first);


    // Keyboard shortcuts
    // $(document).keydown(function(e) {
    //   var unicode = e.charCode ? e.charCode : e.keyCode;
    //   // right arrow
    //   if (unicode == 39) {
    //     var next = $('li.playing').next();
    //     if (!next.length) next = $('ol li').first();
    //     next.click();
    //     // back arrow
    //   } else if (unicode == 37) {
    //     var prev = $('li.playing').prev();
    //     if (!prev.length) prev = $('ol li').last();
    //     prev.click();
    //     // spacebar
    //   }
    //
    //     //window.audio.playPause(); TODO: Toggle playPause
    // });
  }



  render(){
    return (
      <div>
        <ol id='playlist'>
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
