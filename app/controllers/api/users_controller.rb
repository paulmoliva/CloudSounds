class Api::UsersController < ApplicationController
  def new
  @user = User.new
end

def create
  @user = User.new(user_params)

  if @user.save
    sign_in(@user)
    render :show
  else
    puts @user.errors.full_messages
    render :show
  end
end

  private
  def user_params
    params.require(:user).permit(:password, :username, :email)
  end
end
