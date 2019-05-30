const hotels =[
//* this would be my get response from a hotel api  
  {
    id: 1,
    name: "Cotton House Hotel",
    url: "https://www.telegraph.co.uk/content/dam/Travel/hotels/europe/spain/barcelona/cotton-house-hotel-barcelona-xlarge.jpg",
    stars: 5,
    price: "£270",
    location: "Barcelona, Catalonia"
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