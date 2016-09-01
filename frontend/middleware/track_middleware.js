import {receiveSingleTrack,
        receiveErrors,
        receiveUserTracks,
        removeDeletedTrack,
        TrackConstants} from '../actions/track_actions';

import {create_track,
        fetchUserTracks,
        deleteTrack} from '../util/track_api_util';

import {hashHistory} from 'react-router';

export default ({getState, dispatch}) => next => action => {
  const successCallback = track => {
    dispatch(receiveSingleTrack(track));
    hashHistory.push('/home');
  };
  const userTracksSuccess = tracks => {
    dispatch(receiveUserTracks(tracks));
    hashHistory.push('/home');
  };
  const deleteTracksSuccess = id => {
    debugger;
    dispatch(removeDeletedTrack(id));
  };
  const errorCallback = xhr => {
    debugger;
    const errors = xhr.responseJson;
    dispatch(receiveErrors(errors));
  };
  switch (action.type) {
    case TrackConstants.CREATE_TRACK:
      debugger;
      create_track(action.track, successCallback, errorCallback);
      return next(action);
    case TrackConstants.FETCH_USER_TRACKS:
      fetchUserTracks(action.tracks, userTracksSuccess, errorCallback);
      return next(action);
    case TrackConstants.DELETE_TRACK:
      deleteTrack(action.track.id, deleteTracksSuccess, errorCallback);
      return next(action);
    default:
      return next(action);
  }
};
