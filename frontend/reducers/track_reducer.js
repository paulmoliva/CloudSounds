import { TrackConstants } from '../actions/track_actions';
import { CommentConstants } from '../actions/comment_actions';
import {LikeConstants} from '../actions/like_actions';
import merge from 'lodash/merge';

const TrackReducer = function(state = {}, action) {
  switch (action.type) {
    case TrackConstants.FETCH_USER_TRACKS:
      return merge({}, state, {loading:true});
    case TrackConstants.RECEIVE_SINGLE_TRACK:
      state.loading = false;
      const track = action.track;
      return merge({}, state, track);
    case TrackConstants.RECEIVE_USER_TRACKS:
      state.loading = false;
      const tracks = action.tracks;
      return merge({}, tracks);
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
    case CommentConstants.REMOVE_COMMENT:
      let deletedCommentTrackId = action.comment.track_id;
      let commentIdToRemove = action.comment.id;
      let stateWCommentRemoved = merge({}, state);
      delete stateWCommentRemoved[deletedCommentTrackId]
        .comments[commentIdToRemove];
      return stateWCommentRemoved;
    case LikeConstants.RECEIVE_LIKE:
      const like = action.num;
      let newLikeState = merge({}, state);
      newLikeState[like.track_id].like_count += like.increment;
      newLikeState[like.track_id].liked = true;
      return newLikeState;
    default:
      return state;
  }
};

export default TrackReducer;
