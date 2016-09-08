class CreateLikes < ActiveRecord::Migration
  def change
    create_table :likes do |t|
      t.integer :user_id
      t.integer :track_id

      t.timestamps null: false
    end
    add_index(:likes, :user_id)
    add_index(:likes, :track_id)
  end
end
