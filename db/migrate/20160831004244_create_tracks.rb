class CreateTracks < ActiveRecord::Migration
  def change

    create_table :tracks do |t|
      t.string :title
      t.text :description
      t.integer :user_id
      t.integer :weather_id
      t.string :audio_url
      t.string :image_url, default: 'http://res.cloudinary.com/cloud-sounds/image/upload/v1472772526/album_qfitcx.jpg'

      t.timestamps null: false
    end
  end
end
