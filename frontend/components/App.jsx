import React from 'react';
import { Link } from 'react-router';
import SplashContainer from './splash/splash_container';

class App extends React.Component {



  componentDidMount(){
    this.setUpPlayer();
  }

setUpPlayer(){
    let a = window.audiojs.createAll({
      trackEnded: function() {
        var next = $('ol li.playing').next();
        if (!next.length) next = $('ol li').first();
        next.addClass('playing').siblings().removeClass('playing');
        audio.load($('a', next).attr('data-src'));
        audio.play();
      }
    });

    // Load in the first track
    window.audio = a[0];
    let first = $('ol a').attr('data-src');
    $('ol li').first().addClass('playing');
    window.audio.load(first);

    // Load in a track on click
    $('ol li').click(function(e) {
      e.preventDefault();
      $(this).addClass('playing').siblings().removeClass('playing');
      window.audio.load($('a', this).attr('data-src'));
      window.audio.play();
    });
    // Keyboard shortcuts
    $(document).keydown(function(e) {
      var unicode = e.charCode ? e.charCode : e.keyCode;
      // right arrow
      if (unicode == 39) {
        var next = $('li.playing').next();
        if (!next.length) next = $('ol li').first();
        next.click();
        // back arrow
      } else if (unicode == 37) {
        var prev = $('li.playing').prev();
        if (!prev.length) prev = $('ol li').last();
        prev.click();
        // spacebar
      }

        //window.audio.playPause(); TODO: Toggle playPause
    });
  }



  render(){
    return (
      <div>
        {this.props.children}

        <div id="wrapper">

          <audio preload></audio>
          <ol>
            <li><a href="#" data-src="https://res.cloudinary.com/cloud-sounds/video/upload/v1472701577/xbfceaisgqo8vfghbed1.mp3">The Fragrance of Dark Coffee</a></li>
          </ol>
        </div>


      </div>
    );
  }
}





export default App;
