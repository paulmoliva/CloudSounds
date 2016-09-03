user = User.find(comment.user_id)

json.set! comment.id do
  json.id comment.id
  json.user_id comment.user_id
  json.user_name user.username
  json.user_image_url user.avatar_url
  json.track_id comment.track_id
  json.body comment.body
  json.time_ago time_ago_in_words(comment.created_at)
end
