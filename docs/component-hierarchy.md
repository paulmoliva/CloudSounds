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

**SearchResultsContainer**
- Search
- TracksIndex

**TrackItem**
- TrackPhoto
- PlayTrackButton
- ToggleQueuedButton
- TrackInfo
  + TrackUser
  + TrackTitle
  + TrackMoodIcon

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
