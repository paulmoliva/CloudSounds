import { connect } from 'react-redux';
import { logout, login, signup, clearErrors } from '../../actions/session_actions';
import Splash from './splash';

const mapStateToProps = state => ({
  currentUser: state.session.currentUser,
  errors: state.session.errors
});

const mapDispatchToProps = dispatch => ({
  clearErrors: () => dispatch(clearErrors()),
  logout: () => dispatch(logout()),
  login: (user) => dispatch(login(user)),
  signup: (user) => dispatch(signup(user))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Splash);
