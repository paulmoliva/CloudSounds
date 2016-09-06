class AddPeaksToTracks < ActiveRecord::Migration
  def change
    add_column :tracks, :peaks, :float, array:true, default: []
  end
end
