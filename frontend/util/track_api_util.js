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
  let param = $.param({track: {'user_id': track_params['id'],
                               'track_id': track_params['track_id']
                              }
                      });
  $.get({
    url: `/api/tracks?${param}`,
    success,
    errors
  });
};

export const deleteTrack = function(id, success, errors) {
  $.ajax({
    type: 'DELETE',
    url: `api/tracks?id=${id}`,
    success
  });
};
