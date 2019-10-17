class FlightSerializer < ActiveModel::Serializer
  attributes :id, :to, :from, :departure, :arrival, :price
end
