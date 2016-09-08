class Api::SearchController < ApplicationController

  def index
    @comments = []
    @tracks = Track.where("title ILIKE ?", "%#{params.keys.first}%")
  end

end
