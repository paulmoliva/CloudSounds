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
    debugger;
      const comment = action.comment;
      const aNewState = merge({}, state);
      const oldTrackComments = aNewState.tracks[comment.track_id].comments;
      aNewState.tracks[comment.track_id].comments =
        merge(oldTrackComments, action.comment);
      return aNewState;
    case CommentConstants.REMOVE_COMMENT:
      const theNewState = merge({}, state);
      delete theNewState
        .tracks[action.comment.track_id]
        .comments[action.comment.id];
    default:
      return state;
  }
};

export default TrackReducer;
