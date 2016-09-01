json.set! track.id do
  json.id track.id
  json.title track.title
  json.description track.description
  json.user_id track.user_id
  json.weather_id track.weather_id
  json.audio_url track.audio_url
  json.image_url track.image_url
end

# params.require(:track).permit(:title, :description, :audio_url,
#  :user_id, :image_url, :weather_id)
