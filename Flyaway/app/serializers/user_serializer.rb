class UserSerializer < ActiveModel::Serializer
  attributes :id, :first_name, :last_name, :nationality, :hotels
  has_many :hotels, through: :bookings
  has_many :flights, through: :bookings 
  has_many :bookings
end
