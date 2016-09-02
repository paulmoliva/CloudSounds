class AddIndexes < ActiveRecord::Migration
  def change
    add_index(:users, :username)
    add_index(:users, :session_token)
    add_index(:tracks, :user_id)
    add_index(:tracks, :weather_id)
  end
end
