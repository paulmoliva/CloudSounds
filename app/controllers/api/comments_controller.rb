class Api::CommentsController < ApplicationController

  def index
    @comments = Track.find(params[:track_id]).comments
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
      @comment.destroy!
      render json: params[:id]
    end

    private
    def comment_params
      params.require(:comment).permit(:user_id, :track_id, :body)
    end

end
