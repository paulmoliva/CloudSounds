# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

10.times do
  User.create!(
    username: Faker::Internet.user_name,
    password: 'password',
    email: Faker::Internet.email,
    avatar_url: Faker::Avatar.image
  )
end

User.create!(
  username: 'Guest',
  password: 'password',
  email: Faker::Internet.email,
  avatar_url: 'http://res.cloudinary.com/cloud-sounds/image/upload/c_crop,g_face:center,r_max,w_500/c_scale,w_129/v1472615014/c2b61026_homer-headphones_eguuts.jpg'
)

10.times do
  Track.create!(
    title: Faker::Hipster.sentence(3),
    description: Faker::Hipster.sentence(4),
    user_id: 11,
    weather_id: 1,
    audio_url: 'http://example.com/track.mp3',
    image_url: Faker::Avatar.image("my-own-slug", "50x50")
  )
end
