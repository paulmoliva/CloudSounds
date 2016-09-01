import React from 'react';

export const TrackItem  = function({track, currentUser, playTrack}) {
  debugger;
  return (
    <li>
      <div className="track-item">
        <img src={track.image_url.replace('upload', 'upload/w_160,h_160/r_10')} alt="" />
        <div className={"column " + "weather-" + track.weather_id + "-track"}>
          <div className = "flex-row">
            <button className="circle-play" data-src={track.audio_url} onClick={playTrack}></button>
            <div className="info">
              <p className="track-user">
                {currentUser.user.username}
              </p>
              <p className="track-name">
                {track.title}
              </p>
            </div>
            <div className="icons">

              <img src={"http://res.cloudinary.com/cloud-sounds/image/upload/w_40,h_40/v1472690716/icon-" + track.weather_id} className='icon-40 favorite-icon' />
            </div>
          </div>
          <div className="track-description">
            {track.description}
          </div>
          <input className="comment" type="text" placeholder="Write a comment"/>
          <button className='track-favorite'>24</button>
        </div>
      </div>
    </li>
  );
};