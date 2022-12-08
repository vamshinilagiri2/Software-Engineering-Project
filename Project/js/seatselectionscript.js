const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const title = urlParams.get('title')
const showtime = urlParams.get('showtime')
const showdate = urlParams.get('showdate')
const container = document.querySelector('.container');
const seats = document.querySelectorAll('.row .seat:not(.occupied');
const count = document.getElementById('count');
const total = document.getElementById('total');
const movieSelect = document.getElementById('movie');
const movienameonpage = document.getElementById('movie-container');
const proceedbtn = document.getElementById('proceedbtn');

const screenid = urlParams.get('screenid');


var seatsselected=[];
var selectedSeatsCount = 0;

var selectedSeats = [];
populateUI();
let ticketPrice = +movieSelect.value;

function moviename() {
  movienameonpage.innerHTML = `
  <label>Movie Name :  <span style="padding-left:10px;"> ${title}</span></label><br>
  
  `;

  proceedbtn.innerHTML= `
  
    <input type="button"  value="Proceed" class="btn" onclick="gotordersummary()">
  `;
}

function gotordersummary() {
  var checkoutseats = window.localStorage.getItem('selectedSeats');
  movienameonpage.innerHTML = `
  <label>Movie Name :  <span style="padding-left:10px;"> ${title}</span></label><br>
  
  `;

  proceedbtn.innerHTML= `
  <a href="http://localhost/Integration/Project/ordersummary.html?title=${title}&showtime=${showtime}&showdate=${showdate}&screenid=${screenid}&seatcount=${selectedSeatsCount}&seats=A1,A2,A3">
    <input type="button"  value="Proceed" class="btn" >
  </a>
  `;
}



// Save selected movie index and price
function setMovieData(movieIndex, moviePrice) {
  localStorage.setItem('selectedMovieIndex', movieIndex);
  localStorage.setItem('selectedMoviePrice', moviePrice);
}

// update total and count
function updateSelectedCount() {
   selectedSeats = document.querySelectorAll('.row .seat.selected');

  const seatsIndex = [...selectedSeats].map((seat) => [...seats].indexOf(seat));

  // localStorage.setItem('selectedSeats', JSON.stringify(seatsIndex));

  //copy selected seats into arr
  // map through array
  //return new array of indexes

   selectedSeatsCount = selectedSeats.length;

  count.innerText = selectedSeatsCount;
  // total.innerText = selectedSeatsCount * ticketPrice;

}

// get data from localstorage and populate ui
function populateUI() {
  const selectedSeats = JSON.parse(localStorage.getItem('selectedSeats'));
  if (selectedSeats !== null && selectedSeats.length > 0) {
    seats.forEach((seat, index) => {
      if (selectedSeats.indexOf(index) > -1) {
        seat.classList.add('selected');
      }
    });
  }

  const selectedMovieIndex = localStorage.getItem('selectedMovieIndex');

  if (selectedMovieIndex !== null) {
    movieSelect.selectedIndex = selectedMovieIndex;
  }
}

// Movie select event
movieSelect.addEventListener('change', (e) => {
  ticketPrice = +e.target.value;
  setMovieData(e.target.selectedIndex, e.target.value);
  updateSelectedCount();
});

// Seat click event
container.addEventListener('click', (e) => {
  if (e.target.classList.contains('seat') && !e.target.classList.contains('occupied')) {
    e.target.classList.toggle('selected');
    if(seatsselected.includes(e.target.id)) {
      for( var i = 0; i < seatsselected.length; i++){ 
    
        if ( seatsselected[i] === e.target.id) { 
    
          seatsselected.splice(i, 1); 
        }
    
    }


    } 
    else {
      seatsselected.push(e.target.id)
    }
    localStorage.setItem('selectedSeats', JSON.stringify(seatsselected));
    console.log(seatsselected)


    updateSelectedCount();

  }
});

// intial count and total
updateSelectedCount();