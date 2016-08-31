# Schema Information

## users
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
username        | string    | not null, indexed, unique
email           | string    | not null, indexed, unique
avatar_url      | string    | not null, default: './avatar.png'
password_digest | string    | not null
session_token   | string    | not null, indexed, unique

## tracks
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
title       | string    | not null
description | text      |
uploader_id | integer   | not null, foreign key (references users), indexed
weather_id  | integer   | not null, foreign key (references weather), indexed
audio_url   | string    | not null, unique
image_url   | string    | not null, default: './default_track_art.png'

## comments
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
author_id   | integer   | not null, foreign key (references users), indexed
track_id    | integer   | not null, foreign_key (references track), indexed
body        | text      | not null

## likes
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
liker_id    | integer   | not null, foreign_key (references user), indexed

## follows
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
follower_id | integer   | not null, foreign key (references users), indexed
followee_id | integer   | not null, foreign key (references users), indexed

## weathers
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
weather_type| string    | not null, unique
