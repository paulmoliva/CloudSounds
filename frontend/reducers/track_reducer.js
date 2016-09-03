import { TrackConstants } from '../actions/track_actions';
import { CommentConstants } from '../actions/comment_actions';
import merge from 'lodash/merge';

const TrackReducer = function(state = {}, action) {
  switch (action.type) {
    case TrackConstants.RECEIVE_SINGLE_TRACK:
      const track = action.track;
      return merge({}, state, track);
    case TrackConstants.RECEIVE_USER_TRACKS:
      const tracks = action.tracks;
      return merge({}, state, tracks);
    case TrackConstants.REMOVE_DELETED_TRACK:
      const newState = merge({}, state);
      delete newState[action.id];
      return newState;
    case TrackConstants.RECEIVE_ERRORS:
      const errors = action.errors;
      return merge({}, {errors});
    case TrackConstants.CLEAR_ERRORS:
      return merge({}, {});
    case CommentConstants.RECEIVE_SINGLE_COMMENT:
      let newCommentID = Object.keys(action.comment)[0];
      let commentTrackID = action.comment[newCommentID].track_id;
      let oldState = merge({}, state);
      oldState[commentTrackID].comments =
        merge(oldState[commentTrackID].comments, action.comment);
      return oldState;
    default:
      return state;
  }
};

export default TrackReducer;
