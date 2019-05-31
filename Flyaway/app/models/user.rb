class User < ApplicationRecord
    has_many :bookings
    has_many :hotels, through: :bookings
    has_many :flights, through: :bookings 
    
end
