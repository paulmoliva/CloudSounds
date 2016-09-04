class Api::TracksController < ApplicationController
  def new
    @track = Track.new
  end

  def index
    if params[:user_id]
      @user = User.find(params[:user_id])
      @tracks = User.find(params[:user_id]).tracks
    end
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
