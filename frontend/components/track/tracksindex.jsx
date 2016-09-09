import React from 'react';
import TrackItem from './track_item';
import Masonry from 'react-masonry-component';

export class TracksList extends React.Component {
  constructor(props){
    super(props);
  }


  render() {
    if (!this.props.tracks.length){
      return (<p></p>);
    } else if (this.props.loading) {
      return (
        <Masonry className='home-tracks'
                  elementType={'ul'}>
          <li>
        <img src="https://res.cloudinary.com/cloud-sounds/image/upload/v1473401875/giphy_2_oo7udv.gif" />
          </li>
        </Masonry>
      );
    }
    else {
      return (
      <Masonry className='home-tracks'
        elementType={'ul'}
        ref={ function(c) {
                if (c)
                  window.masonry = c.masonry;
              }
            }
      >
      {this.props.tracks.map ( track => {
        return (
          <TrackItem
            key={track.id}
            track={track}
            currentUser={this.props.currentUser}
            playTrack={this.props.playTrack}
            deleteTrack={this.props.deleteTrack}
            fetchUserTracks={this.props.fetchUserTracks}
            createComment={this.props.createComment}
            deleteComment={this.props.deleteComment}
            like={this.props.like}
            unlike={this.props.unlike}
            />
          );
        })
      }
    </Masonry>);
    }
  }
}
