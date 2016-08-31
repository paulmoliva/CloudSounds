if user.nil?
  json.user do
    {}
  end
else
  json.user do
    json.username user.username
    json.avatar_url user.avatar_url
    json.errors user.errors
  end
end
