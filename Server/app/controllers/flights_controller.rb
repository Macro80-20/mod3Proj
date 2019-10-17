class FlightsController < ApplicationController

    def index
        flights = Flight.all
       if flights
        render json:  flights
       else
            render json: {error: "unable to find any flights"}, status: 400
       end
    end


end
