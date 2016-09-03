
import { applyMiddleware } from 'redux';
import TrackMiddleware from '../middleware/track_middleware';
import SessionMiddleware from '../middleware/session_middleware';
import CommentMiddleware from '../middleware/comment_middleware';

const RootMiddleware = applyMiddleware(
  SessionMiddleware,
  TrackMiddleware,
  CommentMiddleware
);

export default RootMiddleware;
