import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import { fetchUserTracks } from '../../actions/track_actions';
import Home from './home';

const mapStateToProps = state => {
  return {
    currentUser: state.session.currentUser,
    tracks: state.tracks,
    weather: state.weather
  };
};

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout()),
  fetchUserTracks: (user_id) => dispatch(fetchUserTracks(user_id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
