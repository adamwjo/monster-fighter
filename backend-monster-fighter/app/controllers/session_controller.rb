class SessionController < ApplicationController
  def create

  end

  def destory

  end

private
  def session_params
    params.require(:user).permit(:username, :password)
  end
end
