```javascript
{
  currentUser: {
    id: 1,
    username: "Stormy Cloudbro",
    avatar_url: 'http://cloudinary.com/kjG79Doh.png'
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
      created_at: '2015-09-10 13:44:24 UTC',
      queue_position: 2
    },
    2: {
      title: "Yeah Dude it's Sunny Part Deux",
      description: "Extended Ukulele Cover of BROCCOLI",
      uploader_id: 1,
      weather_mood_id: 1
      audio_url: 'http://cloudinary.com/s2773SysW3.mp3',
      image_url: 'http://cloudinary.com/S2uYyg6e85.png',
      track_length: 623,
      created_at: '2015-10-10 13:44:24 UTC',
      queue_position: 0
    },
    3: {
      title: "Yeah Dude it's Sunny Artist Commentary",
      description: "Stormy Discusses his song",
      uploader_id: 1,
      weather_mood_id: 1
      audio_url: 'http://cloudinary.com/sf773SysW3.mp3',
      image_url: 'http://cloudinary.com/ShuYyg6e85.png',
      track_length: 823,
      created_at: '2015-09-10 13:44:24 UTC',
      queue_position: 1
    },
    4: {
      title: "Yeah Dude it's Sunny Remix",
      description: "Remix of Stormy's Ukulele Cover of BROCCOLI",
      uploader_id: 3,
      weather_mood_id: 1
      audio_url: 'http://cloudinary.com/sf773SysW3.mp3',
      image_url: 'http://cloudinary.com/ShuYyg6e85.png',
      track_length: 223,
      created_at: '2015-09-10 13:44:24 UTC',
      queue_position: 3
    }
  },
  users: {
    1: {
      username: "Stormy Cloudbro",
      avatar_url: 'http://cloudinary.com/kjG79Doh.png'
    },
    2: {
      username: "Rainy Gloomguy",
      avatar_url: 'http://cloudinary.com/RjG79Doh.png'
    },
    3: {
      username: "Wendy Gusto",
      avatar_url: 'http://cloudinary.com/WjG79Doh.png'
    },
  }
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
    track : 1,
    progress: 121,
    paused: false,
    volume: 0.7
  },
  playQueue: {
    queue: [2, 3, 1, 4],
    current_position: 2
  }
}
```
