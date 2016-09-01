class Api::TracksController < ApplicationController
  def new
    @track = Track.new
  end

  def index
    @tracks = User.find(track_params[:user_id]).tracks

  end

  def create
    @track = Track.new(track_params)

    if @track.save
      render :show
    else
      render(
        json: @track.errors.full_messages
      )
    end
  end

  private
  def track_params
    params.require(:track).permit(:title, :description, :audio_url,
     :user_id, :image_url, :weather_id)
  end
end
