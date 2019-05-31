class CreateBookings < ActiveRecord::Migration[5.2]
  def change
    create_table :bookings do |t|
      t.string :review
      t.integer :user_id
      t.integer :hotel_id
      t.integer :flight_id
      t.timestamps
    end
  end
end
