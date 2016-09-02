class Api::TracksController < ApplicationController
  def new
    @track = Track.new
  end

  def index
    @tracks = User.find(track_params[:user_id]).tracks
    @comments = track_params[:with_comments]
  end

  def create
    @track = Track.new(track_params)

    if @track.save
      render :show
    else
      render json: @track.errors.full_messages, status: 401
    end
  end

  def destroy
    @track = Track.find(params[:id])
    @track.destroy!
    render json: params[:id]
  end

  private
  def track_params
    params.require(:track).permit(:title, :description, :audio_url,
     :user_id, :image_url, :weather_id, :with_comments)
  end
end
