import React from 'react';
import {playTrack,
        addTracktoPlaylist,
        addOlListener} from '../../util/player_helpers';
const SplashTrackItem = ({track}) => {
  if (typeof track === 'object' && Object.keys(track).length) return (
  <li className="album"
    key={track.id}
    id={`splash-track-${track.id}`}
    data-src={track.audio_url}
    data-img={track.image_url}
    data-title={track.title}
  >
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
  else return (<img src="https://res.cloudinary.com/cloud-sounds/image/upload/v1473033713/loading5_kluvdv.gif" />);
};

export default SplashTrackItem;
