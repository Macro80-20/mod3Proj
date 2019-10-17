class BookingsController < ApplicationController

    def index 
        bookings = Booking.all
        if bookings
            render json: bookings 
        else 
            render json: {error: "No current Bookings"}
        end 
    end

    def create
        booking = booking.new(
            review: params[:review],
            user_id: params[:user_id],
            hotel_id: params[:name], 
            flight_id: params[:flight_id], 
            )
        if booking.save
                render json: booking
            else
                render json: {error: "unable to create booking."}, status: 400
        end
    end

    def destroy 
        booking = Booking.find_by(id: params[:id])
        if booking.destroy
            booking.destroy
            render json: {message: "booking destroyed."}
        end
    end

    



end
