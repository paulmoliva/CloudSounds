import {receiveSingleTrack,
        receiveErrors,
        TrackConstants} from '../actions/track_actions';

import {create_track} from '../util/track_api_util';

import {hashHistory} from 'react-router';

export default ({getState, dispatch}) => next => action => {
  const successCallback = track => {
    dispatch(receiveSingleTrack(track));
    hashHistory.push('/home');
  };
  const errorCallback = xhr => {
    const errors = xhr.responseJson;
    dispatch(receiveErrors(errors));
  };
  switch (action.type) {
    case TrackConstants.CREATE_TRACK:
      create_track(action.track, successCallback, errorCallback);
      return next(action);
    default:
      return next(action);
  }
};
