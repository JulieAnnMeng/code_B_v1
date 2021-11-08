class UsersController < ApplicationController
    skip_before_action :authorize, only: :create

    def create
        user = User.create(user_params)
        session[:user_id] = user.id
        render json: user, status: :created
    end

    def index
        render json: User.all, status: :ok
    end

    def show
        user = User.find(params[:id])
        render json: user, status: :ok
    end

    def page
        user = User.find_by(username: user_params[:username])
        id = user.id
        userInterests = Interest.find_by(user_id: id)
        userDiscussions = Discussion.find_by(user_id: id)
        userComments = Comment.find_by(user_id: id)
        userPage = {interest: userInterests, discussion: userDiscussions, comments: userComments}
        byebug
        render json: userPage, serializer: UserSerializer.userPage
    end

    def update
        user = User.find_by(username: params[:id])
        if user.update(user_params)
            render json: user, status: :created
        else
            rende json: {errors: user.errors}, status: :unauthorized
        end
    end

    def destroy
        user = User.find(params[:id])
        user.destroy
        head :no_content
    end

    private
    def user_params
        params.permit(:id, :user, :first_name, :last_name, :username, :password, :password_confirmation)
    end
end