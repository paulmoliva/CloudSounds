import React from 'react';
import { Link } from 'react-router';
import SplashContainer from './splash/splash_container';

const App = ({children}) => (
  <div>
    {children}
    <div className="play-controls">
      <audio src="http://res.cloudinary.com/cloud-sounds/video/upload/v1472616847/xeXS8StuaDqa.128_ftu4he.mp3" preload="auto" />
    </div>
  </div>
);

export default App;
