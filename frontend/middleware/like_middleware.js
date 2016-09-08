import {
  LikeConstants,
  like,
  receiveLike,
  unlike
} from '../actions/like_actions';

import {
  sendLike,
  sendUnlike
} from '../util/like_api_util';

export default ({getState, dispatch}) => next => action => {
  const likeCallback = num => {
    dispatch(receiveLike(num));
  };

  switch (action.type) {
    case LikeConstants.LIKE:
      sendLike(action.likeData, likeCallback);
      return next(action);
    case LikeConstants.UNLIKE:
      sendUnlike(action.likeData, likeCallback);
      return next(action);
    default:
      return next(action);
  }
};
