import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import { fetchUserTracks, deleteTrack } from '../../actions/track_actions';
import { createComment, deleteComment } from '../../actions/comment_actions';
import TrackShow from './track_show';

const mapStateToProps = state => {
  return {
    currentUser: state.session.currentUser,
    tracks: state.tracks,
    weather: state.weather
  };
};

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout()),
  fetchUserTracks: (track_id) => dispatch(fetchUserTracks(track_id)),
  deleteTrack: (track_id) => dispatch(deleteTrack(track_id)),
  createComment: (comment) => dispatch(createComment(comment)),
  deleteComment: (id) => dispatch(deleteComment(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TrackShow);
