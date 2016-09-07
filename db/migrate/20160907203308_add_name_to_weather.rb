class AddNameToWeather < ActiveRecord::Migration
  def change
    add_column :weathers, :name, :string
  end
end
