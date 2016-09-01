import React from 'react';
import {TrackItem} from './track_item';

export const TracksList = function({tracks, playTrack, currentUser}) {
  debugger;
  if (!tracks.length){
    return (<li></li>);
  }
  else {
    return ( <ul className='home-tracks'>
      {tracks.map ( track => {
      return (
        <TrackItem track={track} currentUser={currentUser} playTrack={playTrack}/>
      );
    })}
  </ul>);
  }
};
