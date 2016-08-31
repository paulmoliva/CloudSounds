import { connect } from 'react-redux';
import { createTrack } from '../../actions/track_actions';
import Upload from './upload';

const mapStateToProps = state => ({
  currentUser: state.session.currentUser
});

const mapDispatchToProps = dispatch => ({
  createTrack: (track) => dispatch(createTrack(track))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Upload);
