import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import { fetchUserTracks, deleteTrack } from '../../actions/track_actions';
import { createComment, deleteComment } from '../../actions/comment_actions';
import { like, unlike } from '../../actions/like_actions';
import { receiveSearchResults, loading } from '../../actions/search_actions';
import TrackShow from './track_show';

const mapStateToProps = state => {
  return {
    currentUser: state.session.currentUser,
    tracks: state.tracks,
    weather: state.weather,
    results: state.results
  };
};

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout()),
  fetchUserTracks: (track_id) => dispatch(fetchUserTracks(track_id)),
  deleteTrack: (track_id) => dispatch(deleteTrack(track_id)),
  createComment: (comment) => dispatch(createComment(comment)),
  deleteComment: (id) => dispatch(deleteComment(id)),
  receiveSearchResults: (results) => dispatch(receiveSearchResults(results)),
  loading: (results) => dispatch(loading(results)),
  like: (likeData) =>dispatch(like(likeData)),
  unlike: (likeData) => dispatch(unlike(likeData)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TrackShow);
