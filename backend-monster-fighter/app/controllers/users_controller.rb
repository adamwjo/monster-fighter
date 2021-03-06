class UsersController < ApplicationController
  # Will check that json token is provided in header on all methods but create user
  skip_before_action :authorized, only: [:create]

  # Return user profile info
  def profile
    render json: { user: UserSerializer.new(current_user) }, status: :accepted
  end

  def index
    @users = User.all
    render(
      json: @users,
      each_serializer: UserSerializer
    )
  end

  def create
    @user = User.create(user_params)
    if @user.valid?
      # Encodes user_id as JWT with app secret key and bundles with response
      @token = encode_token(user_id: @user.id)
      render json: {user: UserSerializer.new(@user), jwt: @token}, status: :created
    else
      render json: { error: 'failed to create user'}, status: :not_acceptable
    end
  end

private

  def user_params
    params.require(:user).permit(:username, :password)
  end
  # End of Users Controller
end
