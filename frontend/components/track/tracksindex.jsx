import React from 'react';
import TrackItem from './track_item';

export const TracksList = function({tracks,
                                    playTrack,
                                    currentUser,
                                    deleteTrack,
                                    fetchUserTracks,
                                    createComment,
                                    deleteComment})
{
  if (!tracks.length){
    return (<p></p>);
  }
  else {
    return ( <ul className='home-tracks'>
      {tracks.map ( track => {
        return (
          <TrackItem
            key={track.id}
            track={track}
            currentUser={currentUser}
            playTrack={playTrack}
            deleteTrack={deleteTrack}
            fetchUserTracks={fetchUserTracks}
            createComment={createComment}
            deleteComment={deleteComment}
            />
        );
        })
      }
    </ul>);
  }
};
