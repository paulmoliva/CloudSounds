import React from 'react';
import {playTrack, addTracktoPlaylist} from '../../util/player_helpers';
const SplashTrackItem = ({track}) => (
  <li className="album" key={track.id} id={`splash-track-${track.id}`}>
    <img src={track.image_url.replace('upload', 'upload/w_212,h_212')}
      onClick={ () => {
        addTracktoPlaylist(track);
        playTrack($(`#track-${track.id}`));
      }}
    />
  <img src="https://res.cloudinary.com/cloud-sounds/image/upload/c_scale,w_106/v1473209342/play-151523_960_720_m6doxn.png"
       onClick={ () => {
         addTracktoPlaylist(track);
         playTrack($(`#track-${track.id}`));
       }}
       className="overlay" />
  <div className="track-info">
      <aside>{track.title}</aside>
      <aside>{track.username}</aside>
      <ul className='track-item-buttons'>
        <button className='enqueue-track'
          onClick={ () => addTracktoPlaylist(track) }
          title="Add to playlist">
        </button>
      </ul>
    </div>
  </li>
);

export default SplashTrackItem;
