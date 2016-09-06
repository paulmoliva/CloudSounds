class Api::TracksController < ApplicationController
  def new
    @track = Track.new
  end

  def index
    if track_params[:user_id].length >= 1
      @user = User.find(track_params[:user_id])
      @tracks = User.find(track_params[:user_id]).tracks
    elsif track_params[:track_id]
      @tracks = Track.find(track_params[:track_id].to_i)
      @user = User.find(@tracks.user_id)
    end
  end

  def create
    @track = Track.new(track_params)
    debugger
    if @track.save
      render :show
    else
      render json: @track.errors.full_messages, status: 401
    end
  end

  def update
    @track = Track.find(params[:id])
    if @track.update(track_params)
      render json: params[:id]
    else
      render json: 'error saving peaks', status: 401
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
     :user_id, :image_url, :weather_id, :track_id, :peaks => [])
  end
end
