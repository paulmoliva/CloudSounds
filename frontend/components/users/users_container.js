import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import { fetchUserTracks, deleteTrack } from '../../actions/track_actions';
import { createComment, deleteComment } from '../../actions/comment_actions';
import { like, unlike } from '../../actions/like_actions';
import { receiveSearchResults, loading } from '../../actions/search_actions';
import UserShow from './user_show';


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
  fetchUserTracks: (user_id) => dispatch(fetchUserTracks(user_id)),
  deleteTrack: (track_id) => dispatch(deleteTrack(track_id)),
  createComment: (comment) => dispatch(createComment(comment)),
  deleteComment: (id) => dispatch(deleteComment(id)),
  like: (likeData) =>dispatch(like(likeData)),
  unlike: (likeData) => dispatch(unlike(likeData)),
  receiveSearchResults: (results) => dispatch(receiveSearchResults(results)),
  loading: (results) => dispatch(loading(results))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserShow);
