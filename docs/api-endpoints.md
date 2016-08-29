# API Endpoints

## HTML API

### Root

- `GET /` - loads React web app

## JSON API

### Users

- `POST /api/users`
- `PATCH /api/users`

### Session

- `POST /api/session`
- `DELETE /api/session`
- `GET /api/session`

### Tracks

- `GET /api/tracks`
  - Tracks index/search
  - accepts `uploader_id` query param to list tracks by uploader
  - accepts `liker_id` query param to list tracks liked by user
  - accepts `weather_id` query param to list tracks by weather
  - accepts `followee_id` query param to list tracks from followees
  - accepts `text` query params for search
  - accepts pagination params (if I get there)
- `GET /api/tracks/:id`
- `POST /api/tracks`
- `PATCH /api/tracks/:id`
- `DELETE /api/tracks/:id`

### Comments

- `GET /api/comments`
  - Used to display recent comments in sidebar
- `POST /api/comments`
- `DELETE /api/comments/:id`
- `GET /api/tracks/:id/comments`
  - index of all comments for a track
  - accepts pagination params (if I get there)

### Weather

- `GET /api/???`
  - External API call to get the current weather in user's location.
  - Weather defaults to SF if no location provided.

### Likes

- `GET /api/likes`
  - Used to display recent likes activity in sidebar.
- `GET /api/tracks/:id/likes`
  - index of all likes for a track
- `POST /api/likes/:id`: Like a track
- `DELETE /api/likes/:like_id/tags/:tag_name`: Unlike a track

### Follows

- `GET /api/follows`
- `POST /api/follows/id` : Follow a user
- `DELETE /api/follows` : Unfollow a user
- `GET /api/users/:id/follows`
  - All a user's follow relationships
