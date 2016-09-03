import {
  createComment,
  receiveSingleComment,
  destroyComment,
  removeComment,
  CommentConstants
} from '../actions/comment_actions';

import {
  create_comment,
  deleteComment
} from '../util/comment_api_util';

export default ({getState, dispatch}) => next => action => {
  const createCommentSuccess = comment => {
    dispatch(receiveSingleComment(comment));
  };
  const deleteCommentSuccess = comment => {
    dispatch(removeComment(comment));
  };
  switch (action.type) {

    case CommentConstants.CREATE_COMMENT:
      create_comment(action.comment, createCommentSuccess);
      return next(action);
    case CommentConstants.DELETE_COMMENT:
      deleteComment(action.id, deleteCommentSuccess);
      return next(action);
    default:
      return next(action);
  }
};
