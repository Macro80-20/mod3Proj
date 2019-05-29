# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


User.create(
    first_name: "Dr",
    last_name: "No",
    nationality: "british"
    )

Hotel.create(
    name: "La Bastide de Gordes",
    nights: 3,
    stars: 3,
    location: "Gordes, Provence, France",
    url: "https://www.telegraph.co.uk/content/dam/Travel/hotels/europe/france/provence/Bastide-de-Gordes-Provence-summary-large.jpg",
    user_id: 1
    )

Hotel.create(
    name: "Belmond Hotel Splendido",
    nights: 5,
    stars: 3,
    location: "Portofino, Liguria, Italy",
    url: "https://www.telegraph.co.uk/content/dam/Travel/hotels/europe/italy/liguria/belmond-hotel-splendido-restaurant-large.jpg",
    user_id:1
    )

Hotel.create(
    name: "Four Seasons Hotel Moscow",
    nights: 9,
    stars: 4,
    location: "beach",
    url: "https://www.telegraph.co.uk/content/dam/Travel/Destinations/Europe/Russia/Moscow/four-seasons-moscow-p-large.jpg",
    user_id: 1
)

