const hotels =[
//* this would be my get response from a hotel api  
  {
    id: 1,
    name: "Guatemala",
    url: "https://www.avianca.com/content/dam/avianca_new/destinos/gua/gt_gua_los_colores_de_guatemala.jpg",
    stars: 5,
    price: "100 Quatzalez",
    location: "Tical, Guate"
  },
  {
    id: 2,
    name: "Ett Hem",
    url: "https://www.telegraph.co.uk/content/dam/Travel/hotels/scandanavia/sweden/ett-hem-stockholm-garden-seating-xlarge.jpg",
    stars: 4,
    price:"£313",
    location: "Stockholm, Sweden"
  },
  {
    id: 3,
    name: "Hotel du Cap Eden Roc",
    url: "https://www.telegraph.co.uk/content/dam/Travel/hotels/articles/fifty-best-hotels/hotel-cap-eden-roc-xlarge.jpg",
    stars: 5,
    price: "£595",
    location: "Cap d'Antibes, Côte d'Azur, France"
  },
  {
    id: 4,
    name: "Four Seasons Hotel Gresham Palace",
    url: "https://www.telegraph.co.uk/content/dam/Travel/hotels/articles/fifty-best-hotels/four-seasons-gresham-palace-xlarge.jpg",
    stars: 3,
    price: "£360",
    location: "Budapest, Hungary"
  }
]

   const USER_ID = 1    
   const HOTEL_URL = 'http://localhost:3000/hotels'
   const USERS_URL = 'http://localhost:3000/users'
   const FLIGHTS_URL = 'http://localhost:3000/flights'
    //*This is my fetch to user
    getUserHotelBookings = () =>
    fetch(USERS_URL + `/${USER_ID}`).then(users=>users.json())

      //*create a new hotel
      
   const createHotelBooking = (id,hotel) => {
    fetch(HOTEL_URL,{
      method: `POST`,
      headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
      body: JSON.stringify({
          user_id: id,
          name: hotel.name,
          nights: hotel.nights,
          stars:  hotel.stars,
          location: hotel.location,
          url: hotel.url
       })
     }).then(resp => resp.json())
   }
   
   //*update hotel star rating 
   const updateStars = (id,hotel,stars) => 
    fetch(USERS_URL + `/${USER_ID}`,{
      method: `PATCH`,
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        user_id: id,
        hotel_id: hotel.id,
        stars:  stars
        })
      }).then(resp => resp.json())
   

//* Delete a hotel 
 
 const deleteHotel = id => {
  fetch(HOTEL_URL + `/${id}`,{
        method: `DELETE`
        })
        .then(resp => resp.json())
 }


 const fetchFlights = () => 
 fetch(FLIGHTS_URL).then(resp => resp.json())

 const getBookings = () =>
 fetch(BOOKINGS_URL).then(resp => resp.json())


 const bookingsApi = [
  {
  "id": 1,
  "review": "Clean Hotel, No delays",
  "user": {
  "id": 1,
  "first_name": "Dr",
  "last_name": "No",
  "nationality": "british",
  },
  "hotel": {
  "id": 1,
  "name": "La Bastide de Gordes",
  "nights": 3,
  "stars": 3,
  "location": "Gordes, Provence, France",
  "url": "https://www.telegraph.co.uk/content/dam/Travel/hotels/europe/france/provence/Bastide-de-Gordes-Provence-summary-large.jpg",
  },
  "flight": {
  "id": 1,
  "to": "Marseille Airport",
  "from": "London Heathrow",
  "departure": "2019-05-30T00:20:19.500Z",
  "arrival": "2019-05-30T00:20:19.500Z",
  "price": "£180"
  }
  }
  ]