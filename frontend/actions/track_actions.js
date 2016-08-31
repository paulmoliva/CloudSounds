export const TrackConstants = {
  CREATE_TRACK: "CREATE_TRACK",
  RECEIVE_SINGLE_TRACK: "RECEIVE_SINGLE_TRACK"
};

export const createTrack = track => ({
  type: TrackConstants.CREATE_TRACK,
  track
});

export const receiveSingleTrack = track => ({
  type: TrackConstants.RECEIVE_SINGLE_TRACK,
  track
});
