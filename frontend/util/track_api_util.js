import {TrackConstants,
       createTrack,
       receiveSingleTrack,
       receiveUserTracks} from '../actions/track_actions';

export const create_track = function(track_params, success, errors) {
  $.post({
    url: '/api/tracks?' + $.param(track_params),
    success,
    errors
  });
};

export const fetchUserTracks = function(track_params, success, errors) {
  let param = $.param({track: {'user_id': track_params['id']}})
  $.get({
    url: `/api/users/${track_params['id']}/tracks?${param}`,
    success,
    errors
  });
};
