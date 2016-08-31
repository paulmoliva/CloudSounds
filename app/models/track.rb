class Track < ActiveRecord::Base

  validates :title, :user_id, :weather_id, :audio_url, :image_url, presence: true
  belongs_to :user

end
