@comments.each do |comment|
  json.partial! '/api/comments/comment', commment: comment
end
