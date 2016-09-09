import React from 'react';
import {playTrack, addTracktoPlaylist} from '../../util/player_helpers';
export const SearchItem = ({track}) => {
  return (
    <li>
      <button className="circle-play"
        id={track.id}
        data-src={track.audio_url}
        onClick={
          () => {
            addTracktoPlaylist(track);
            playTrack($(`#search-${track.id}`));
          }
        } />
        <button className='enqueue-track'
          onClick={() => addTracktoPlaylist(track)}
          title="Add to playlist" />
          <p className="data-ball hidden"
             id={`search-${track.id}`}
             data-src={track.audio_url}
             data-img={track.image_url}
             data-title={track.title}
             data-weathername={track.weather_name}
          ></p>
          <img src=
            {"https://res.cloudinary.com/cloud-sounds/image/upload/w_40,h_40/v1472690716/icon-" +
                track.weather_id}
            className='icon-40 favorite-icon liked'
            id = {'icon'+track.id}
          />
        <img src={track.image_url.replace('upload/', 'upload/w_40,h_40/')} />
        {track.title}
    </li>
  );
};
