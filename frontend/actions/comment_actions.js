export const CommentConstants = {
  CREATE_COMMENT: "CREATE_COMMENT",
  RECEIVE_SINGLE_COMMENT: "RECEIVE_SINGLE_COMMENT",
  DESTROY_COMMENT: "DESTROY_COMMENT",
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

export const destroyComment = comment => ({
  type: CommentConstants.DESTROY_COMMENT,
  comment
});

export const removeComment = comment => ({
  type: CommentConstants.REMOVE_COMMENT,
  comment
});
