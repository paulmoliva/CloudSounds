if user.nil?
  json.user do
    {}
  end
else
  json.user do
    json.username user.username
    json.errors user.errors
  end
end
