export const TrackConstants = {
  CREATE_TRACK: "CREATE_TRACK",
  RECEIVE_SINGLE_TRACK: "RECEIVE_SINGLE_TRACK",
  FETCH_USER_TRACKS: 'FETCH_USER_TRACKS',
  RECEIVE_USER_TRACKS: "RECEIVE_USER_TRACKS",
  DELETE_TRACK: "DELETE_TRACK",
  REMOVE_DELETED_TRACK: "REMOVE_DELETED_TRACK",
  RECEIVE_ERRORS: "RECEIVE_ERRORS",
  CLEAR_ERRORS: "CLEAR_ERRORS"
};

export const createTrack = track => ({
  type: TrackConstants.CREATE_TRACK,
  track
});

export const receiveSingleTrack = track => ({
  type: TrackConstants.RECEIVE_SINGLE_TRACK,
  track
});

export const fetchUserTracks = tracks => ({
  type: TrackConstants.FETCH_USER_TRACKS,
  tracks
});

export const receiveUserTracks = tracks => ({
  type: TrackConstants.RECEIVE_USER_TRACKS,
  tracks
});

export const receiveErrors = errors => ({
  type: TrackConstants.RECEIVE_ERRORS,
  errors
});

export const deleteTrack = track => ({
  type: TrackConstants.DELETE_TRACK,
  track
});

export const removeDeletedTrack = id => ({
  type: TrackConstants.REMOVE_DELETED_TRACK,
  id
});
