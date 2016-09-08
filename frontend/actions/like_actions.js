export const LikeConstants = {
  LIKE: "LIKE",
  RECEIVE_LIKE: "RECEIVE_LIKE",
  UNLIKE: "UNLIKE",
  REMOVE_LIKE: "REMOVE_LIKE",
};

export const like = likeData => ({
  type: LikeConstants.LIKE,
  likeData
});

export const receiveLike = num => ({
  type: LikeConstants.RECEIVE_LIKE,
  num
});

export const unlike = likeData => ({
  type: LikeConstants.UNLIKE,
  likeData
});
