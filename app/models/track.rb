class Track < ActiveRecord::Base
  before_save :default_values
  validates :title, :user_id, :weather_id, :audio_url, presence: true
  belongs_to :user
  has_many :comments

  def default_values
    if self.image_url == ""
      self.image_url = 'http://res.cloudinary.com/cloud-sounds/image/upload/v1472772526/album_qfitcx.jpg'
    end
  end

end
