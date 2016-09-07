if @tracks.is_a?(Track::ActiveRecord_Associations_CollectionProxy)
  @tracks.each do |track|
    json.partial! '/api/tracks/track', track: track, commments: @comments
  end
else
  json.partial! '/api/tracks/track', track: @tracks, commments: @comments
end
json.username @user.username if @user
