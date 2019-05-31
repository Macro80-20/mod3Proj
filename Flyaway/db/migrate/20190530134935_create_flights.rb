class CreateFlights < ActiveRecord::Migration[5.2]
  def change
    create_table :flights do |t|
      t.string :to
      t.string :from
      t.datetime :departure
      t.datetime :arrival
      t.string :price

      t.timestamps
    end
  end
end
