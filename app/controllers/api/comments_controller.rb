class Api::CommentsController < ApplicationController

  def index
    @comments = Track.find(params[:track_id]).comments.reverse
  end

  def create
    @comment = Comment.new(comment_params)
    if @comment.save
      render :show
    else
      render json: @comment.errors.full_messages, status: 401
    end
  end

    def destroy
      @comment = Comment.find(params[:id])
      track_id = @comment.track_id
      @comment.destroy!
      render json: {track_id: track_id,
                    id: params[:id].to_i}
    end

    private
    def comment_params
      params.require(:comment).permit(:user_id, :track_id, :body)
    end

end
