## Heroku Link

[cloudsounds.io](http://cloudsounds.io)

##Minimum Viable Product

- [ ] Song CRUD

- [ ] Continuous play while navigating site

- [ ] Track Pages

- [ ] Comments

- [ ] User pages

- [ ] Bonus: Playlists for particular weather

- [ ] Bonus: Likes

- [ ] Bonus: Follows

- [ ] Bonus: Search

- [ ] Bonus: Interactive Map with option to tag tracks with your location

- [x] Bonus: Superfluous weather puns

**Design Docs**
- [View WireFrames](https://github.com/paulmoliva/CloudSounds/tree/master/docs/wireframes)
- [Component Hierarchy](https://github.com/paulmoliva/CloudSounds/tree/master/docs/component-hierarchy.md)
- [Sample State](./sample-state.md)
- [Redux Structure](https://github.com/paulmoliva/CloudSounds/blob/master/docs/redux-structure.md)
- [API Endpoints](https://github.com/paulmoliva/CloudSounds/blob/master/docs/api-endpoints.md)

## Implementation Timeline

###Phase 1: Backend setup and Front End User Authentication (2 Days)

**Objective:** functioning rails project with front-end Authentication.

- [x] New Rails Project
- [ ] User model/migration
- [ ] Back end authentication (session/password)
- [ ] StaticPages controller and root view
- [ ] Webpack & react/redux modules
- [ ] APIUtil to interact with the API
- [ ] Redux cycle for frontend authentication
- [ ] User signup/signin components
- [ ] Blank landing component after signup/signin
- [ ] Style signup/signin components
- [ ] Seed users
- [ ] Review Phase 1

###Phase 2: Tracks Model, API, and components (2 days)

**Objective:** Tracks can be created, read, updated, and destroyed through the API.

- [ ] `Track` Model
- [ ] Seed database with small amount of test data
- [ ] CRUD API for tracks (`TracksController`)
- [ ] JBuilder views for tracks
- Track componenets and respective Redux loops
  - [ ] TracksIndex
  - [ ] TrackItem
  - [ ] TrackForm
- Tracks by weather feature
  - [ ] `Weather` model
  - [ ] Seed `Weather` types
  - [ ] configure external weather API
- [ ] Style tracks components
- [ ] Seed tracks

###Phase 3: Comments, Track Pages, User Pages (2 days)

**Objective:** Tracks and Users have their own show pages
- [ ] `Comment` model
- [ ] Seed database with small amount of comment data.
- [ ] CRUD API for comments `CommentsController`
- [ ] JBuillder views for comments
- Comment components and their respective redux loops
  - [ ] CommentsIndex
  - [ ] CommentItem
  - [ ] CommentForm
- [ ] Flesh out JBuilder views for `tracks#show` and `users#show`
- [ ] Components for TrackPage and UserPage
- [ ] Style comments, tracks pages, user pages.
- [ ] Seed comments

##Phase 4: Audio Playback (4 Days)

**Objective:** Tracks play continuously while navigating site, user can enqueue and dequeue tracks.
- [ ] Research Cloudinary/ ways to host audio files
- [ ] Research HTML 5 audio player.
- AudioPlayer components and Redux Loops
  - [ ] AudioPlayer
  - [ ] AudioControls
  - [ ] QueueControls?
- [ ] Style AudioControls
- [ ] Seed real tracks and their respective weather!
- [ ] Configure weather mood playlists.

##Phase 5: Like and Follows (2 Days)

**Objective:** User can like tracks and follow other users.
- [ ] `Like` model
- [ ] Seed database with small amount of like data.
- [ ] CruD API for likes `LikesController`
- [ ] JBuilder views for likes
- Like componenets and their respective Redux loops
  - [ ] `ToggleLikeButton` in `TrackItem`
  - [ ] Add `LikedTracks` to `UserPage`
- [ ] Style Like components
- [ ] `Follow` model
- [ ] Seed database with small amount of follow data.
- [ ] CruD API for follows `FollowsController`
- [ ] JBuilder views for follows
- Follow components and their respective Redux loops
  - [ ] `ToggleFollowButton` in `UserItem`
  - [ ] Add `FollowedUsers` and `Followers` to `UserPage`
  - [ ] Add a `TracksIndex` stream of tracks from followed users
- [ ] Style Follow Components

##TBD:
- Search
- Interactive Map
- `QueueControls` from `AudioControls` (remove tracks and edit `PlayQueue` from audio player controls bar.)






``
