json.set! comment.id do
  json.id comment.id
  json.user_id comment.user_id
  json.user_name User.find(comment.user_id).username
  json.track_id comment.track_id
  json.body comment.body
  json.time_ago time_ago_in_words(comment.created_at)
end
