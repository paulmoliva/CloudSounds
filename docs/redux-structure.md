# Redux Structure

## Auth Cycles

### Session API Request Actions

* `signUp`
  0. invoked from `SignupForm` `onSubmit`
  0. `POST /api/users` is called.
  0. `receiveCurrentUser` is set as the success callback.
* `logIn`
  0. invoked from `Navbar` `onSubmit`
  0. `POST /api/session` is called.
  0. `receiveCurrentUser` is set as the callback.
* `logOut`
  0. invoked from `Navbar` `onClick`
  0. `DELETE /api/session` is called.
  0. `removeCurrentUser` is set as the success callback.
* `fetchCurrentUser`
  0. invoked from `App` in `didMount`
  0. `GET /api/session` is called.
  0. `receiveCurrentUser` is set as the success callback.

### Session API Response Actions

* `receiveCurrentUser`
  0. invoked from an API callback
  0. the `SessionReducer` stores `currentUser` in the application's state.
* `removeCurrentUser`
  0. invoked from an API callback
  0. the `SessionReducer` removes `currentUser` from the application's state.

## Error Cycles

### Error API Response Actions
* `setErrors`
  0. invoked from API callbacks on error for actions that generate POST requests
  0. the `ErrorReducer` stores the `form` in the application's state; `errors` are mapped to their respective forms
* `removeErrors`
  0. invoked from API callbacks on success for actions that generate POST requests
  0. the `ErrorReducer` removes `errors` for a given `form` in the application's state.

## Weather Cycles

### Weather API Request Actions
* `fetchWeather`
  0. invoked from `App` `didMount`
  0. `GET /api/weather` is called.
  0. `receiveWeather` is set as the success callback.

### Weather API Response Actions

* `receiveAllTracks`
  0. invoked from an API callback
  0. the `WeatherReducer` updates `currentWeather` in the application's state.

## Track Cycles

### Tracks API Request Actions

* `fetchAllTracks`
  0. invoked from `TracksIndex` `didMount`/`willReceiveProps`
  0. `GET /api/tracks` is called.
  0. `receiveAllTracks` is set as the success callback.

* `createTrack`
  0. invoked from new track button `onClick`
  0. `POST /api/tracks` is called.
  0. `receiveSingleTrack` is set as the success callback.

* `fetchSingleTrack`
  0. invoked from `TrackDetail` `didMount`/`willReceiveProps`
  0. `GET /api/tracks/:id` is called.
  0. `receiveSingleTrack` is set as the success callback.

* `updateTrack`
  0. invoked from `TrackForm` `onSubmit`
  0. `POST /api/tracks` is called.
  0. `receiveSingleTrack` is set as the success callback.

* `destroyTrack`
  0. invoked from delete track button `onClick`
  0. `DELETE /api/tracks/:id` is called.
  0. `removeTrack` is set as the success callback.

### Tracks API Response Actions

* `receiveAllTracks`
  0. invoked from an API callback
  0. the `TrackReducer` updates `tracks` in the application's state.

* `receiveSingleTrack`
  0. invoked from an API callback
  0. the `TrackReducer` updates `tracks[id]` in the application's state.

* `removeTrack`
  0. invoked from an API callback
  0. the `TrackReducer` removes `tracks[id]` from the application's state.

## User Cycles

### Users API Request Actions

* `fetchAllUsers`
  0. invoked from `UsersIndex` `didMount`/`willReceiveProps`
  0. `GET /api/users` is called.
  0. `receiveAllUsers` is set as the success callback.

* `createUser`
  0. invoked from new user button `onClick`
  0. `POST /api/users` is called.
  0. `receiveSingleUser` is set as the success callback.

* `fetchSingleUser`
  0. invoked from `UserDetail` `didMount`/`willReceiveProps`
  0. `GET /api/users/:id` is called.
  0. `receiveSingleUser` is set as the success callback.

* `updateUser`
  0. invoked from `UserForm` `onSubmit`
  0. `POST /api/users` is called.
  0. `receiveSingleUser` is set as the success callback.

### Users API Response Actions

* `receiveAllUsers`
  0. invoked from an API callback
  0. the `UserReducer` updates `users` in the application's state.

* `receiveSingleUser`
  0. invoked from an API callback
  0. the `UserReducer` updates `users[id]` in the application's state.

* `removeUser`
  0. invoked from an API callback
  0. the `UserReducer` removes `users[id]` from the application's state.

## Comment Cycles

### Comments API Request Actions

* `fetchAllComments`
  0. invoked from `CommentsIndex` `didMount`/`willReceiveProps`
  0. `GET /api/comments` is called.
  0. `receiveAllComments` is set as the success callback.

* `createComment`
  0. invoked from new comment button `onClick`
  0. `POST /api/comments` is called.
  0. `receiveSingleComment` is set as the success callback.

* `fetchSingleComment`
  0. invoked from `CommentDetail` `didMount`/`willReceiveProps`
  0. `GET /api/comments/:id` is called.
  0. `receiveSingleComment` is set as the success callback.

* `updateComment`
  0. invoked from `CommentForm` `onSubmit`
  0. `POST /api/comments` is called.
  0. `receiveSingleComment` is set as the success callback.

* `destroyComment`
  0. invoked from delete comment button `onClick`
  0. `DELETE /api/comments/:id` is called.
  0. `removeComment` is set as the success callback.

### Comments API Response Actions

* `receiveAllComments`
  0. invoked from an API callback
  0. the `CommentReducer` updates `comments` in the application's state.

* `receiveSingleComment`
  0. invoked from an API callback
  0. the `CommentReducer` updates `comments[id]` in the application's state.

* `removeComment`
  0. invoked from an API callback
  0. the `CommentReducer` removes `comments[id]` from the application's state.

## Like Cycles

### Likes API Request Actions

* `fetchAllLikes`
  0. invoked from `LikesIndex` `didMount`/`willReceiveProps`
  0. `GET /api/likes` is called.
  0. `receiveAllLikes` is set as the success callback.

* `createLike`
  0. invoked from new like button `onClick`
  0. `POST /api/likes` is called.
  0. `receiveAllLikes` is set as the success callback.

* `destroyLike`
  0. invoked from delete like button `onClick`
  0. `DELETE /api/likes/:id` is called.
  0. `removeLike` is set as the success callback.

### Likes API Response Actions

* `receiveAllLikes`
  0. invoked from an API callback
  0. the `LikeReducer` updates `likes` in the application's state.

* `removeLike`
  0. invoked from an API callback
  0. the `LikeReducer` removes `likes[id]` from the application's state.

## Follow Cycles

### Follows API Request Actions

* `fetchAllFollows`
  0. invoked from `FollowsIndex` `didMount`/`willReceiveProps`
  0. `GET /api/follows` is called.
  0. `receiveAllFollows` is set as the success callback.

* `createFollow`
  0. invoked from new follow button `onClick`
  0. `POST /api/follows` is called.
  0. `receiveAllFollows` is set as the success callback.

* `destroyFollow`
  0. invoked from delete follow button `onClick`
  0. `DELETE /api/follows/:id` is called.
  0. `removeFollow` is set as the success callback.

### Follows API Response Actions

* `receiveAllFollows`
  0. invoked from an API callback
  0. the `FollowReducer` updates `follows` in the application's state.

* `removeFollow`
  0. invoked from an API callback
  0. the `FollowReducer` removes `follows[id]` from the application's state.

## NowPlaying Cycles

### NowPlaying API Request Actions

* `fetchTracktoPlay`
  0. invoked from `TrackItem` `PlayTrackButton` `onclick`
  0. `GET /api/tracks/:id` is called.
  0. `setNowPlayingTrack` is set as the callback.

### NowPlaying API Response Actions

* `setNowPlayingTrack`
  0. invoked from an API callback
  0. the NowPlayingReducer updates `nowPlaying[track]` in the application's state.
  0. the NowPlayingReducer updates `playQueue[queue]` in the application's state, inserting the track at the current `playQueue[current_position]`

### NowPlaying Other Actions  

* `playNextTrack`
  0. invoked from `AudioPlayer` `onended` or `AudioControls``SkipButton` `onclick`
  0. the NowPlayingReducer updates `nowPlaying[track]` in the application's state.

* `playPreviousTrack`
  0. invoked from `AudioControls` `BackButton` `onclick`
  0. the NowPlayingReducer updates `nowPlaying[track]` in the application's state.

* `updateProgress`
  0. invoked from `AudioPlayer` `timeupdate`
  0. the NowPlayingReducer updates `nowPlaying[progress]` in the application's state.

* `updateVolume`
  0. invoked from `AudioControls` `VolumeControl` `onchange`
  0. the NowPlayingReducer updates `nowPlaying[volume]` in the application's sate.

* `updatePaused`
  0. invoked from the `AudioControls` `PlayPauseButton` `onclick`
  0. the NowPlayingReducer toggles `nowPlaying[paused]` in the application's state.

## PlayQueue Cycles

### PlayQueue API Request Actions

* `fetchTrackToQueue`
  0. invoked from `TrackItem` `ToggleQueuedButton` `onclick`
  0. `GET /api/tracks` is called.
  0. `enqueueTrack` is set as the callback.

### PlayQueue API Response Actions

* `enqueueTrack`
  0. invoked from an API callback.
  0. updates `PlayQueue[queue]` in the application state.

### PlayQueue Other Actions

* `dequeueTrack`
  0. invoked from `TrackItem` `ToggleQueueButton` `onclick`
  0. updates `PlayQueue[queue]` and `PlayQueue[current_position]` in the application state.

## SearchSuggestion Cycles

* `fetchSearchSuggestions`
  0. invoked from `TrackSearchBar` `onChange` when there is text
  0. `GET /api/tracks` is called with `text` param.
  0. `receiveSearchSuggestions` is set as the success callback.

* `receiveSearchSuggestions`
  0. invoked from an API callback.
  0. The `SearchSuggestion` reducer updates `suggestions` in the application's state.

* `removeSearchSuggestions`
  0. invoked from `TrackSearchBar` `onChange` when empty
  0. The `SearchSuggestion` reducer resets `suggestions` in the application's state.
