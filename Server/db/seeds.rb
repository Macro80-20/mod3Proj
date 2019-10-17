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
    url: "https://www.telegraph.co.uk/content/dam/Travel/hotels/europe/france/provence/Bastide-de-Gordes-Provence-summary-large.jpg"
    )

Hotel.create(
    name: "Belmond Hotel Splendido",
    nights: 5,
    stars: 3,
    location: "Portofino, Liguria, Italy",
    url: "https://www.telegraph.co.uk/content/dam/Travel/hotels/europe/italy/liguria/belmond-hotel-splendido-restaurant-large.jpg"

    )

Hotel.create(
    name: "Four Seasons Hotel Moscow",
    nights: 9,
    stars: 4,
    location: "beach",
    url: "https://www.telegraph.co.uk/content/dam/Travel/Destinations/Europe/Russia/Moscow/four-seasons-moscow-p-large.jpg"
)

Flight.create(
    to: "Marseille Airport",
    from: "London Heathrow",
    departure: "2019,5,29,9",
    arrival: "2019,5,29,12",
    price: "£180"
)

Flight.create(
    to: "Cristoforo Colombo International airport",
    from: "London Heathrow",
    departure: "2019,5,29,9",
    arrival: "2019,5,29,13",
    price: "£60"
)


Flight.create(
    to: "Sheremetyevo International Airport",
    from: "London Heathrow",
    departure: "2019,5,29,11",
    arrival: "2019,5,29,19",
    price: "£300"
)

Flight.create(
    to: "Barcelona-El Prat airport",
    from: "London Heathrow",
    departure: "2019,5,31,8",
    arrival: "2019,5,31,12",
    price: "£130"
)

Flight.create(
    to: "Stockholm Arlanda Airport",
    from: "London Heathrow",
    departure: "2019,5,31,6",
    arrival: "2019,5,31,9",
    price: "£90"
)


Flight.create(
    to: "Budapest Ferenc Liszt International Airport",
    from: "London Heathrow",
    departure: "2019,5,31,9",
    arrival: "2019,5,31,14",
    price: "£60"
)


Booking.create(
    review: "Clean Hotel, No delays",
    user_id: User.first.id,
    hotel_id: Hotel.first.id,
    flight_id: Flight.first.id
)