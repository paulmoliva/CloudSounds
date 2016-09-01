export const TrackConstants = {
  CREATE_TRACK: "CREATE_TRACK",
  RECEIVE_SINGLE_TRACK: "RECEIVE_SINGLE_TRACK",
  FETCH_USER_TRACKS: 'FETCH_USER_TRACKS',
  RECEIVE_USER_TRACKS: "RECEIVE_USER_TRACKS"
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

export const receiveUserTracks = tracks =>{
  return {
  type: TrackConstants.RECEIVE_USER_TRACKS,
  tracks
};};
