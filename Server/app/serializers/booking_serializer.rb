class BookingSerializer < ActiveModel::Serializer
  attributes :id, :review
  belongs_to :user
  belongs_to :hotel
  belongs_to :flight
end
