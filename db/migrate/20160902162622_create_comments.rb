class CreateComments < ActiveRecord::Migration
  def change
    create_table :comments do |t|
      t.integer :user_id, null:false
      t.integer :track_id, null:false
      t.string :body, null:false
      t.timestamps null: false
    end
    add_index(:comments, :user_id)
    add_index(:comments, :track_id)

  end
end
