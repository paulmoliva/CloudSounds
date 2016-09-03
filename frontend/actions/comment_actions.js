export const CommentConstants = {
  CREATE_COMMENT: "CREATE_COMMENT",
  RECEIVE_SINGLE_COMMENT: "RECEIVE_SINGLE_COMMENT",
  DELETE_COMMENT: "DELETE_COMMENT",
  REMOVE_COMMENT: "REMOVE_COMMENT",
};

export const createComment = comment => ({
  type: CommentConstants.CREATE_COMMENT,
  comment
});

export const receiveSingleComment = comment => ({
  type: CommentConstants.RECEIVE_SINGLE_COMMENT,
  comment
});

export const deleteComment = id => ({
  type: CommentConstants.DELETE_COMMENT,
  id
});

export const removeComment = comment => ({
  type: CommentConstants.REMOVE_COMMENT,
  comment
});
