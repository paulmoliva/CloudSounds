
import { applyMiddleware } from 'redux';
import TrackMiddleware from '../middleware/track_middleware';
import SessionMiddleware from '../middleware/session_middleware';
import CommentMiddleware from '../middleware/comment_middleware';
import LikeMiddleware from '../middleware/like_middleware';

const RootMiddleware = applyMiddleware(
  SessionMiddleware,
  TrackMiddleware,
  CommentMiddleware,
  LikeMiddleware
);

export default RootMiddleware;
