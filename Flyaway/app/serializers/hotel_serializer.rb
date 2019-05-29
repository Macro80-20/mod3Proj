class HotelSerializer < ActiveModel::Serializer
  attributes :id, :name, :nights, :stars, :location
  has_one :user
end
