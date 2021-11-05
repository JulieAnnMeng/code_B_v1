class DiscussionsController < ApplicationController

    def index
        render json: Discussion.all, status: :ok
    end

    def show
        discussion = Discussion.find(params[:id])
        render json: discussion, status: :ok
    end
end
