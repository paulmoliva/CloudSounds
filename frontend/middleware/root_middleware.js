
import { applyMiddleware } from 'redux';
import TrackMiddleware from '../middleware/track_middleware';
import SessionMiddleware from '../middleware/session_middleware';

const RootMiddleware = applyMiddleware(
  SessionMiddleware,
  TrackMiddleware
);

export default RootMiddleware;
