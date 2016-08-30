import { connect } from 'react-redux';
import { logout, login, signup } from '../../actions/session_actions';
import Splash from './splash';

const mapStateToProps = state => ({
  currentUser: state.session.currentUser
});

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout()),
  login: (user) => dispatch(login(user)),
  signup: () => dispatch(signup())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Splash);
