import { TrackConstants } from '../actions/track_actions';
import merge from 'lodash/merge';

const TrackReducer = function(state = {}, action){
  switch (action.type) {
    case TrackConstants.RECEIVE_SINGLE_TRACK:
      const track = action.track;
      return merge({}, state, {track});
    case TrackConstants.RECEIVE_USER_TRACKS:
      const tracks = action.tracks;
      return merge({}, state, tracks);
    default:
      return state;
  }
};

export default TrackReducer;
