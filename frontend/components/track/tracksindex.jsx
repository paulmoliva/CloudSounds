import React from 'react';
import TrackItem from './track_item';
import Masonry from 'react-masonry-component';
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
    return ( <Masonry className='home-tracks'
                elementType={'ul'}
                ref={function(c) {window.masonry = c.masonry;}}
              >
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
    </Masonry>);
  }
};
