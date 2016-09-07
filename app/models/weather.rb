class Weather < ActiveRecord::Base
  has_many :tracks
end
