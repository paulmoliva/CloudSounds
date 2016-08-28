```javascript
{
  currentUser: {
    id: 1,
    username: "Stormy Cloudbro"
  },
  forms: {
    signUp: {errors: []},
    logIn: {errors: []},
    createTrack: {errors: ["title can't be blank"]},
    comment: {errors: []}
  },
  tracks: {
    1: {
      title: "Yeah Dude it's Sunny",
      description: "Ukulele Cover of BROCCOLI",
      uploader_id: 1,
      weather_mood_id: 1
      audio_url: 'http://cloudinary.com/sf773SysW3.mp3',
      image_url: 'http://cloudinary.com/ShuYyg6e85.png',
      track_length: 323,
      created_at: '2015-09-10 13:44:24 UTC'
    },
    2: {
      title: "Yeah Dude it's Sunny Part Deux",
      description: "Extended Ukulele Cover of BROCCOLI",
      uploader_id: 1,
      weather_mood_id: 1
      audio_url: 'http://cloudinary.com/s2773SysW3.mp3',
      image_url: 'http://cloudinary.com/S2uYyg6e85.png',
      track_length: 623,
      created_at: '2015-10-10 13:44:24 UTC'
    }
  },
  comments: {
    1: {
      author_id: 3,
      track_id: 1,
      body: 'I prefer Rainy Gloomguy\'s harpsicord cover of OOOUUU',
      created_at: '2015-09-10 14:44:24 UTC'
    }
  },
  likes {
    1: {
      liker_id: 2,
      track_id: 2
    }
  },
  follows {
    1: {
      follower_id: 2,
      followee_id: 1
    }
  },
  currentWeather: {
    city: 'San Francisco',
    temperature: 65,
    description: 'sunny'
  },
  nowPlaying: {
    track_id: 2,
    play_progress: 121,
    paused: false
  }
}
```
