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


function moviename() {

  movienameonpage.innerHTML = `
  <label>Movie Name :  <span style="padding-left:10px;"> ${title}</span></label><br>
  
  `;

  proceedbtn.innerHTML= `
  
    <input type="button"  value="Proceed" class="btn" onclick="gotordersummary()">
  `;

  var checkoutseats = window.localStorage.getItem('selectedSeats');
  var checkoutseatsArr = checkoutseats.split(",");
  if(checkoutseats) {
    seatsselected = checkoutseatsArr;
  }
  else {
    seatsselected = [];
  }

  console.log(checkoutseatsArr);
  for(let i of checkoutseatsArr) {
    document.getElementById(i).className="seat selected";
  }

  document.getElementById("count").innerHTML=seatsselected.length;

}

function gotordersummary() {
  var checkoutseats = window.localStorage.getItem('selectedSeats');
  movienameonpage.innerHTML = `
  <label>Movie Name :  <span style="padding-left:10px;"> ${title}</span></label><br>
  
  `;
  window.location.href=`http://localhost/Integration/Project/ordersummary.html?title=${title}&showtime=${showtime}&showdate=${showdate}&screenid=${screenid}&seatcount=${document.getElementById("count").innerHTML}&seats=${checkoutseats}`;
}
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

    localStorage.setItem('selectedSeats', seatsselected.join());
    const seatselectedstring = JSON.stringify(seatsselected);
    console.log(JSON.parse(seatselectedstring));
    console.log(seatsselected)
    document.getElementById("count").innerHTML=seatsselected.length;

  }
});

