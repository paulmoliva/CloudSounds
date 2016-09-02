class CreateTracks < ActiveRecord::Migration
  def change

    create_table :tracks do |t|
      t.string :title, null:false
      t.text :description
      t.integer :user_id, null:false
      t.integer :weather_id, null:false
      t.string :audio_url, null:false
      t.string :image_url, default: 'http://res.cloudinary.com/cloud-sounds/image/upload/v1472772526/album_qfitcx.jpg'

      t.timestamps null: false
    end
  end
end
