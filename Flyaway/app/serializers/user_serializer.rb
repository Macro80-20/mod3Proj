class UserSerializer < ActiveModel::Serializer
  attributes :id, :first_name, :last_name, :nationality, :hotels
  has_many :hotels
  class HotelSerializer < ActiveModel::Serializer
    attributes :id, :name, :stars, :location, :url, :nights
  end
end
