class CreateTracks < ActiveRecord::Migration
  def change

    create_table :tracks do |t|
      t.string :title
      t.text :description
      t.integer :user_id
      t.integer :weather_id
      t.string :audio_url
      t.string :image_url

      t.timestamps null: false
    end
  end
end
