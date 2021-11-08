class InterestsController < ApplicationController
    skip_before_action :authorize, only: [:index, :show]
    
    def index
        render json: Interest.all, status: :ok
    end

    def show
        interest = Interest.find(params[:id])
        render json: interest, status: :ok
    end

    def create
        interest = Interest.new(interest_params)
        if interest.save
            render json: selection, status: :created
        else
            render json: {errors: interest.errors}, status: :unauthorized
        end
    end

    def update
        interest = Interest.find(params[:id])
        if interest.update(interest_params)
            render json: selection, status: :created
        else
            render json: {errors: interest.errors}, status: :unauthorized
        end
    end

    def destroy
        interest = Interest.find(params[:id])
        interest.destroy
        head :no_content
    end

    private
    def interest_params
        params.permit(:user_id, :discussion_id)
    end
end
