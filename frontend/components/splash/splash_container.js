import { connect } from 'react-redux';
import { logout, login, signup, clearErrors } from '../../actions/session_actions';
import { fetchUserTracks } from '../../actions/track_actions';
import { receiveWeather } from '../../actions/weather_actions';
import Splash from './splash';

const mapStateToProps = state => ({
  currentUser: state.session.currentUser,
  errors: state.session.errors,
  tracks: state.tracks,
  weather: state.weather
});

const mapDispatchToProps = dispatch => ({
  clearErrors: () => dispatch(clearErrors()),
  fetchUserTracks: (weather_id) => dispatch(fetchUserTracks(weather_id)),
  logout: () => dispatch(logout()),
  login: (user) => dispatch(login(user)),
  signup: (user) => dispatch(signup(user)),
  receiveWeather: (weather) => dispatch(receiveWeather(weather))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Splash);
