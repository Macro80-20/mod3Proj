// const addBtn = document.querySelector('#new-booking')
const checkBtn = document.querySelector("#view-bookings")
const BookingForm = document.querySelector('.container')
const checkBookings= document.querySelector('.bookings')
 let addBooking = false
 let check = false

const hotelList= document.querySelector(`#hotel-list`);
const bookingsList = document.querySelector(`#bookings-list`)
const bookingFormEl = document.querySelector(`#add-a-booking`)
const hiddennField = document.querySelector("#specific-hotel")
document.addEventListener("DOMContentLoaded", () => {
  addHotels(hotels)
  //! a)
  // getUserHotelBookings().then(addBookings)
  //! b) 
  addBookings()
  
})

//! hide & seek with the form
//! Slide toggle 2 individual <divs> with 2 different buttons
//! refacotring i would not need the toggle , i got a way to check if someone is on or off by checking display
// addBtn.addEventListener("click", () =>{
//   addBooking = !addBooking

//   console.log(addBooking)
//   if(addBooking || checkBookings.style.display == "block"){
//     checkBookings.style.display = "none"  
//      check = false 
//     BookingForm.style.display = "block"
//   }else {
//   BookingForm.style.display = 'none'
//   }
//   })
  
  checkBtn.addEventListener("click", () => {
  check = !check
  console.log(check)
  if(check || BookingForm.style.display == "block"){
    BookingForm.style.display = "none"
    addBooking = false 
    checkBookings.style.display = "block"
  
  }else {
    checkBookings.style.display = "none"
  }
  })
// // })



addHotels = (hotels) => 
  hotels.forEach( hotel => addHotel(hotel))
  //* taking apart the hash of hotels and invoking the method to populate my dom
  // with one hotel at a time 
addHotel = (hotel) => {
  let hotelCard = document.createElement(`div`)
  hotelCard.className ="card"
  hotelCard.innerHTML =`
    <h2 class="hotel_name"> ${hotel.name} </h2>
    <img class="hotel_image"src="${hotel.url}"/>
    <button class="stars" type="button" disabled > ${hotel.stars} Stars *** </button>
    <p style='text-align:center'> Relax and Enjoy <button class='book-hotel' id='${hotel.name}'>Book your Hotel</button></p>
    <p> From ${hotel.price} per night </p>
    <p> <strong>Location:</strong>${hotel.location}</p>
    `
    const addBtn = hotelCard.querySelector('.book-hotel')

    addBtn.addEventListener("click", (event) =>{
  addBooking = !addBooking

  console.log(addBooking)
  if(addBooking || checkBookings.style.display == "block"){
    checkBookings.style.display = "none"  
     check = false 
    BookingForm.style.display = "block"
  }else {
  BookingForm.style.display = 'none'
  }
  hiddennField.value = event.target.id
  })

    // wanted to disable the stars buttons for the hotels list
  //  hotelCard.documentquerySelector(".stars").disabled = true
  hotelList.append(hotelCard)
}

// addBtn.addEventListener("click", () =>{
//   addBooking = !addBooking

//   console.log(addBooking)
//   if(addBooking || checkBookings.style.display == "block"){
//     checkBookings.style.display = "none"  
//      check = false 
//     BookingForm.style.display = "block"
//   }else {
//   BookingForm.style.display = 'none'
//   }
//   })

//the challenge is when they send the form
// i want to create a booking under user 1, 
// in the post request i require a bunch of params 
// the form only requires 2 inputs , so how do i not hard code the rest of object info
  
// solution 1: 



//* when we make booking i update the server 
bookingFormEl.addEventListener("submit",e => {
  e.preventDefault()
let nameOfHotel = event.target.children["hotel-name"].value
let numOfNights = parseInt(event.target.nights.value,10)
//  debugger   
hotel = hotels.find( hotel => hotel.name == nameOfHotel);
//in the db we need params[:nights] so we add nights to our hotel object from userInput
hotel["nights"] = numOfNights 
createHotelBooking(USER_ID,hotel) 
BookingForm.style.display = "none"
addBooking = false 
checkBookings.style.display = "block"
check = true 
e.target.reset()
})





//* i want the user to see a list of their previous booked hotels 


//function that makes fetch request to user is in my api.js file 
//! Two ways  then i invoke it in the DomEventlistiner
//! A)
// let addBookings = (bookings) => {
// bookings.hotels.forEach(booking => renderBooking(booking))
// }
//!B)
let addBookings = () => {
  getUserHotelBookings()
  .then(resp => resp.hotels.forEach(booking => renderBooking(booking)))
}



//function that renders the users hotels  and appends to checkboooings div
let renderBooking = booking =>{
  let bookingInfo = document.createElement('div')
  let formEl = document.querySelector(`#rate-your-hotel`)
  bookingInfo.className = "booking"
  bookingInfo.innerHTML =`
    <h3 class="hotel_name" > ${booking.name} </h3>
    <img class="hotel_image"src="${booking.url}"/>
    <p class="current-rating"> Current rating: ${booking.stars} </p>
    <p style='text-align:center'> Rate your hotel
    <form id="rate-your-hotel" action="#" method="post">
    <input type="submit" name="rate" value="rate" class="submit">
    <select class="input-rating"name="rating">
          <option value="5">5 ***</option>
          <option value="4">4***</option>
          <option value="3">3***</option>
          <option value="2">2***</option>
          <option value="1">1***</option>
        </select>
      </form>
    </p>
    <button class ="review"> Leave a Review! </button> 
    <p> <strong>Nights Stayed:</strong>${booking.nights}</p>
   <p> <strong>Location:</strong>${booking.location}</p>
   <button class ="review" id="delete"> delete </button> 
   `
   const rateFormEl = bookingInfo.querySelector(`#rate-your-hotel`)
   const hotelRating = bookingInfo.querySelector(`.current-rating`)


    rateFormEl.addEventListener("submit", e => {
      e.preventDefault()
      //* two solutions  1)
      //client side
    booking.stars = parseInt(rateFormEl.rating.value,10)
    hotelRating.innerText = `Current rating: ${booking.stars}`
    //server side
    updateStars(USER_ID,booking,booking.stars)

    //*  2) this piece of code creates duplciat which is why inbetween i cleared innerHTML 
            // stars = parseInt(rateFormEl.rating.value,10)
            // updateStars(USER_ID,booking,stars)
            // .then(resp => {
            // bookingsList.innerHTML =''
             // resp.hotels.forEach(booking => renderBooking(booking))
      // })
    
    })

   const deleteBtn = bookingInfo.querySelector('#delete')
    deleteBtn.addEventListener("click",() =>
    //clientside
     

    //serverside
    deleteHotel(booking.id)
    )
   

    bookingsList.append(bookingInfo)
}









const resp = {
"id": 1,
"first_name": "Dr",
"last_name": "No",
"nationality": "british",
"hotels": [
{
"id": 1,
"name": "La Bastide de Gordes",
"stars": 3,
"location": "Gordes, Provence, France",
"url": "https://www.telegraph.co.uk/content/dam/Travel/hotels/europe/france/provence/Bastide-de-Gordes-Provence-summary-large.jpg",
"nights": 3
},
{
"id": 2,
"name": "Belmond Hotel Splendido",
"stars": 3,
"location": "Portofino, Liguria, Italy",
"url": "https://www.telegraph.co.uk/content/dam/Travel/hotels/europe/italy/liguria/belmond-hotel-splendido-restaurant-large.jpg",
"nights": 5
},
{
"id": 3,
"name": "Four Seasons Hotel Moscow",
"stars": 4,
"location": "beach",
"url": "https://www.telegraph.co.uk/content/dam/Travel/Destinations/Europe/Russia/Moscow/four-seasons-moscow-p-large.jpg",
"nights": 9
}
]
}















// hotel1.className = "card"
// hotel1.id = "fer"
// hotel1.innerHTML =`
// <h2 class="hotel_name"> Cotton House Hotel </h2>
// <img class="hotel_image"src="https://www.telegraph.co.uk/content/dam/Travel/hotels/europe/spain/barcelona/cotton-house-hotel-barcelona-xlarge.jpg"/>
// <button class="stars"> 5 Stars *** </button>
// <p> <strong>Location:</strong> Barcelona, Catalonia, </p>
// `

// const hotel2 = document.createElement(`div`)
// hotel2.className = "card"
// hotel2.innerHTML =`
// <h2 class="hotel_name"> Ett Hem </h2>
// <img class="hotel_image"src="https://www.telegraph.co.uk/content/dam/Travel/hotels/scandanavia/sweden/ett-hem-stockholm-garden-seating-xlarge.jpg"/>
// <button class="stars"> 4 Stars *** </button>
// <p> <strong>Location:</strong> Stockholm, Sweden </p>
// `

// const hotel3 = document.createElement(`div`)
// hotel3.className = "card"
// hotel3.innerHTML =`
// <h2 class="hotel_name"> Hotel du Cap-Eden-Roc</h2>
// <img class="hotel_image"src="https://www.telegraph.co.uk/content/dam/Travel/hotels/articles/fifty-best-hotels/hotel-cap-eden-roc-xlarge.jpg"/>
// <button class="stars"> 5 Stars *** </button>
// <p> <strong>Location:</strong> Cap d'Antibes, Côte d'Azur, France </p>
// `
// const hotel4 = document.createElement(`div`)
// hotel4.className = "card"
// hotel4.innerHTML =`
// <h2 class="hotel_name"> Four Seasons Hotel Gresham Palace</h2>
// <img class="hotel_image"src="https://www.telegraph.co.uk/content/dam/Travel/hotels/articles/fifty-best-hotels/four-seasons-gresham-palace-xlarge.jpg"/>
// <button class="stars"> 3 Stars *** </button>
// <p> <strong>Location:</strong> Budapest, Hungary
// </p>
// `


// hotelList.append(hotel1);
// hotelList.append(hotel2);
// hotelList.append(hotel3);
// hotelList.append(hotel4);




