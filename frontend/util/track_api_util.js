import {TrackConstants,
       createTrack,
       receiveSingleTrack} from '../actions/track_actions';

export const create_track = function(track_params, success, errors) {
  $.post({
    url: '/api/tracks?' + $.param(track_params),
    success,
    errors
  });
};
