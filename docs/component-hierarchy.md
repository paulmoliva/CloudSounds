## Component Hierarchy

**App**
- ContentContainer
- AudioPlayer

**AuthFormContainer**
 - AuthForm

**SplashContainer**
 - SplashHero
 - SplashSearch
 - TracksIndex

**HomeContainer**
 - NavBar
 - HomeHero
  * WeatherMoodSelector
 - TracksIndex

**TrackShow**
 - NavBar
 - MoodHero
 - CommentFormContainer
 - TrackItemContainer
  + TrackItem
  + TrackCommentsContainer
    * CommentsIndex
 - Sidebar
  + TracksIndex

**NewTrack**
 - NavBar
 - TrackForm

**UserPage**
- NavBar
- UploadedTracks
  + TracksIndex
- LikedTracks
  + TracksIndex
- Sidebar
  + TracksIndex

**UserItem**
- Avatar
- Username
- ToggleFollowButton

**SearchResultsContainer**
- Search
- TracksIndex

**TrackContainer**
- TrackItem
- TrackComments

**TrackItem**
- TrackPhoto
- TrackInfo
  + UserItem
  + TrackTitle
  + TrackMoodIcon
- PlayTrackButton
- ToggleQueuedButton
- ToggleLikeButton
- TrackComments
- CommentForm

**TrackComments**
  - CommentsIndex

**CommentItem**
  - UserItem
  - TrackName
  - CommentBody
  - RemoveCommentButton

**CommentForm**
  - Body
  - CharacterCounter

**AudioControls**
- PlayPauseButton
- BackButton
- SkipButton
- VolumeControl
- Queue Controls

**PlayQueueControls**
- QueueIndex



## Routes

|Path   | Component   |
|-------|-------------|
| "/" | "SplashContainer" |
| "/sign-up" | "AuthFormContainer" |
| "/sign-in" | "AuthFormContainer" |
| "/home" | "HomeContainer" |
| '/home/search-results' | 'SearchResultsContainer'
| "/tracks/:trackId" | "TrackShow"
| "/user/:userId" | 'UserPage'
| '/tracks/new' | 'NewTrack'
