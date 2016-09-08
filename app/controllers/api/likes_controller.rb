class Api::LikesController < ApplicationController
  def create
    @like = Like.new(like_params)

    if @like.save
      render json: {track_id: like_params[:track_id],
                    increment: 1}
    else
      render json: '0', status: 401
    end
  end

  def destroy
    @like = Like.where(like_params).first
    @like.destroy
    render json: {track_id: like_params[:track_id],
                  increment: -1}
  end

  def like_params
    params.require(:like).permit(:track_id, :user_id)
  end
end
