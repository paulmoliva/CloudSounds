## Component Hierarchy

**AuthFormContainer**
 - AuthForm

**SplashContainer**
 - SplashHero
 - SplashSearch
 - SongsIndex

**HomeContainer**
 - NavBar
 - HomeHero
  * WeatherMoodSelector
 - SongsIndex

**TrackShow**
 - NavBar
 - MoodHero
 - CommentFormContainer
 - TrackItemContainer
  + TrackItem
  + TrackCommentsContainer
    * CommentsIndex
 - Sidebar
  + SongsIndex

**NewTrack**
 - NavBar
 - TrackForm

**UserPage**
- NavBar
- UploadedSongs
  + SongsIndex
- LikedSongs
  + SongsIndex
- Sidebar
  + SongsIndex

**SearchResultsContainer**
- Search
- SongsIndex

**TrackItem**
- TrackPhoto
- PlayButton
- TrackInfo
  + TrackUser
  + TrackTitle
  + TrackMoodIcon



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
