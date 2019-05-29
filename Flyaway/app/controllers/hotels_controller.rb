class HotelsController < ApplicationController
    
    def index
        hotel = Hotel.all
       if hotel 
        render json: hotel 
       else
            render json: {error: "unable to find any hotels"}, status: 400
       end
    end

    def create
        hotel = Hotel.new(
            user_id: params[:user_id],
            name: params[:name], 
            nights: params[:nights], 
            stars: params[:stars], 
            location: params[:location],
            url: params[:url]
            )
        if hotel.save
                render json: hotel
            else
                render json: {error: "unable to create hotel."}, status: 400
        end
    end

    def destroy 
        hotel = Hotel.find_by(id: params[:id])
        if hotel.destroy
            hotel.destroy
            render json: {message: "booking destroyed."}
        end
    end
    
    # Hotel.create(
    #     name: "Hilton",
    #     nights: 3,
    #     stars: 5,
    #     location: "countryside",
    #     user_id: 1
    # )
    
end
