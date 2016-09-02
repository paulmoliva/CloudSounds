import { CommentConstants } from '../actions/comment-actions';
import merge from 'lodash/merge';

const CommentReducer = function (state = {}, action) {
  switch (action.type) {
    case CommentConstants.RECEIVE_SINGLE_COMMENT:
      const comment = action.comment;
      const newState = merge({}, state);
      const oldTrackComments = newState.tracks[comment.track_id].comments;
      newState.tracks[comment.track_id].comments =
        merge(oldTrackComments, action.comment);
      return newState;
    case CommentConstants.REMOVE_COMMENT:
      const newState = merge({}, state);
      delete newState
        .tracks[action.comment.track_id]
        .comments[action.comment.id];
    default:
      return state;
  }
};
