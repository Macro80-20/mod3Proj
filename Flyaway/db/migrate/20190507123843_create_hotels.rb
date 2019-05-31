class CreateHotels < ActiveRecord::Migration[5.2]
  def change
    create_table :hotels do |t|
      t.string :name
      t.integer :nights
      t.integer :stars
      t.string :location
      t.string :url
      t.timestamps
    end
  end
end
