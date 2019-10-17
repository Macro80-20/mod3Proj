// const bookHotelB = document.querySelector('#new-booking')
const viewBookingsBtn = document.querySelector("#view-bookings")
const BookingForm = document.querySelector('.container')
const checkBookings= document.querySelector('.bookings')
 let addBooking = false
 let bookingToggle = false

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

  
  viewBookingsBtn.addEventListener("click", () => {
    bookingToggle = !bookingToggle
  console.log(bookingToggle)
  if(bookingToggle || BookingForm.style.display == "block"){
    BookingForm.style.display = "none"
    addBooking = false 
    checkBookings.style.display = "block"
  
  }else {
    checkBookings.style.display = "none"
  }
  })
// // })


//* toggler 
const seeFlightDetails = (event) => {
  let travelItenaryCard = event.target.parentElement.parentElement.firstElementChild
  let hotelBookedCard = event.target.parentElement
  hotelBookedCard.style.display = "none"
if(hotelBookedCard.style.display == "none") {
  travelItenaryCard.style.display = "block"
}else {
  travelItenaryCard.style.display = "none"
}
  }
//* toggler 
const goBack = (event) => {
  let travelItenaryCard = event.target.parentElement
  let hotelBookedCard = event.target.parentElement.nextSibling
      travelItenaryCard.style.display = "none"
   if(travelItenaryCard.style.display == "none"){
     hotelBookedCard.style.display = "block"
    } else{
      hotelBookedCard.style.display = "none"
    }
  }

const addHotels = (hotels) => 
  hotels.forEach( hotel => renderHotel(hotel))
  //* taking apart the hash of hotels and invoking the method to populate my dom
  // with one hotel at a time 


const renderHotel = (hotel) => {
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
    const bookHotelBtn = hotelCard.querySelector('.book-hotel')

    bookHotelBtn.addEventListener("click", (event) =>{
  addBooking = !addBooking
  if(addBooking || checkBookings.style.display == "block"){
    checkBookings.style.display = "none"  
    bookingToggle = false 
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
bookingToggle = true 
e.target.reset()
})





//* i want the user to see a list of their previo
let addBookings = () => {
  // getUserHotelBookings()
  // .then(resp => resp.hotels.forEach(booking => renderBooking(booking)))
  bookingsApi.forEach(booking => renderBooking(booking))
}



//function that renders the users hotels  and appends to checkboooings div
let renderBooking = booking =>{
  const bookingContainer = document.createElement('div')
  bookingContainer.id = booking.id
  bookingContainer.name = booking.user.first_name
  // const hotelBookedCard = document.createElement('div')
  // const travelItenaryCard = document.createElement('div')
  // travelItenaryCard
  bookingContainer.innerHTML = `
  <div id="${booking.flight.id} class="itenary" display="none">
    <p>To ${booking.flight.to} </p>
    <p> From ${booking.flight.from} </p>
    <p>departure: ${booking.flight.departure}</p>
    <p>arrival: ${booking.flight.arrival}</p>
    <p>price: ${booking.flight.price}</p>
    <button onclick="goBack(event)" id="goback"> Go back  </button> 
  </div>
  <div id="${booking.hotel.id} class="booking">
    <h3 class="hotel_name" > ${booking.hotel.name} </h3>
    <img class="hotel_image"src="${booking.hotel.url}"/>
    <p class="current-rating"> Current rating: ${booking.hotel.stars} </p>
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

    <button class ="review"> Leave a Review! </button> 
    <p> <strong>Nights Stayed:</strong>${booking.nights}</p>
  <p> <strong>Location:</strong>${booking.location}</p>
  <button class ="review" id="delete"> delete </button> 
  <button onclick = "seeFlightDetails(event)" class="go-to-iternary"> Check flight details</button>
 </div>
 `
  
   
  //  const starRatingFormBtn = hotelBookedCard.querySelector(`#rate-your-hotel`)
  //  const hotelRating = hotelBookedCard.querySelector(`.current-rating`)
 

  //   starRatingFormBtn.addEventListener("submit", e => {
  //     e.preventDefault()
  //     //* two solutions  1)
  //     //client side
  //   booking.stars = parseInt(starRatingFormBtn.rating.value,10)
  //   hotelRating.innerText = `Current rating: ${booking.stars}`
  //   //server side
  //   updateStars(USER_ID,booking,booking.stars)

  //   //*  2) this piece of code creates duplciat which is why inbetween i cleared innerHTML 
  //           // stars = parseInt(rateFormEl.rating.value,10)
  //           // updateStars(USER_ID,booking,stars)
  //           // .then(resp => {
  //           // bookingsList.innerHTML =''
  //            // resp.hotels.forEach(booking => renderBooking(booking))
  //     // })
    
  //   })
 //todo fix the way we select our button 
  //  const deleteBtn = hotelBookedCard.querySelector('#delete')
  //   deleteBtn.addEventListener("click",() =>
  //   //clientside
     

  //   //serverside
  //   deleteHotel(booking.id)
  //   )
    bookingsList.append(bookingContainer)
    // bookingsList.append(travelItenaryCard)
    // bookingsList.append(hotelBookedCard)
}























// BEFORE WE WRAPPED OUR iternary and hotel in a container 
// travelItenaryCard.id = booking.flight.id
// travelItenaryCard.className = "itenary"
// travelItenaryCard.style.display = "none"
// travelItenaryCard.innerHTML= `
// <p>To ${booking.flight.to} </p>
// <p> From ${booking.flight.from} </p>
// <p>departure: ${booking.flight.departure}</p>
// <p>arrival: ${booking.flight.arrival}</p>
// <p>price: ${booking.flight.price}</p>
// <button onclick="goBack(event)" id="goback"> Go back  </button> 
// `
// hotelBookedCard.id = booking.hotel.id
// hotelBookedCard.className = "booking"
// hotelBookedCard.innerHTML =`
//   <h3 class="hotel_name" > ${booking.hotel.name} </h3>
//   <img class="hotel_image"src="${booking.hotel.url}"/>
//   <p class="current-rating"> Current rating: ${booking.hotel.stars} </p>
//   <p style='text-align:center'> Rate your hotel
//   <form id="rate-your-hotel" action="#" method="post">
//   <input type="submit" name="rate" value="rate" class="submit">
//   <select class="input-rating"name="rating">
//         <option value="5">5 ***</option>
//         <option value="4">4***</option>
//         <option value="3">3***</option>
//         <option value="2">2***</option>
//         <option value="1">1***</option>
//       </select>

//     </form>

//   <button class ="review"> Leave a Review! </button> 
//   <p> <strong>Nights Stayed:</strong>${booking.nights}</p>
//  <p> <strong>Location:</strong>${booking.location}</p>
//  <button class ="review" id="delete"> delete </button> 
//  <button onclick = "seeFlightDetails(event)" class="go-to-iternary"> Check flight details</button>
//  `








