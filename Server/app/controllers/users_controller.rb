class UsersController < ApplicationController

    def show
     @user= User.find_by(id: params[:id])
    # byebug
     if @user
        render json: @user
      else 
        render json: {error: "id not found"}, status: 400
      end
    end


    #! when i use bye bug this is what params returns 
    #*    Parameters {"user_id"=>1, "hotel_id"=>1, "stars"=>5, "controller"=>"users", "action"=>"update", "id"=>"1", "user"=>{}} permitted: false>
    def update #/users/:id
      # u1.hotels.where(id: 2).update(nights: 2) this is how i would update a specific hotel attribute(stars) for a user 
      # byebug
         @user =User.find_by(id: params[:user_id])
         if @user 
            @user.hotels.where(id: params[:hotel_id]).update(stars: params[:stars])
            render json: @user 
          else  
            render json:{error: "unable to update ratings"}, status: 400
          end
   end 


   





end
