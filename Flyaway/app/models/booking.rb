class Booking < ApplicationRecord
    belongs_to :user
    belongs_to :hotel
    belongs_to :flight

# Car
# Engine
# Piston
# A car has_one :engine
# An engine belongs_to :car
# An engine has_many :pistons
# Piston belongs_to :engine

# A car has_many :pistons, through: :engine
# Piston has_one :car, through: :engine

# Essentially you are delegating a model relationship to another model, so instead of having to call car.engine.pistons, you can just do car.pistons

end

