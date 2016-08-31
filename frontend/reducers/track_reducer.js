import { TrackConstants } from '../actions/track_actions';
import merge from 'lodash/merge';

const TrackReducer = function(state = {}, action){
  switch (action.type) {
    case TrackConstants.receiveSingleTrack:
      const track = action.track;
      return merge({}, {track});
    default:
      return state;
  }
};
