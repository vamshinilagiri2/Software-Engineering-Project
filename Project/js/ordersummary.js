const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const title = urlParams.get('title')
const showtime = urlParams.get('showtime')
const showdate = urlParams.get('showdate')
const resultGrid = document.getElementById('ordersummary');
const buttons = document.getElementById('col-buttons');
const screenid = urlParams.get('screenid');
const selectedSeatsCount = urlParams.get('seatcount');
const seats=urlParams.get('seats');

function orderdetails() 
{
    resultGrid.innerHTML = `
    Movie Name : ${title} <br>
    Theatre: UGA Theatre <br>
    Show date  : ${showdate} <br>
    Screen ID  : Screen ${screenid} <br>
    Show time  : ${showtime} <br>
    Number of Seats Selected: ${selectedSeatsCount}
    
    `;

    buttons.innerHTML = `
    <button class="btn accentric" onclick="makepayment()">Checkout</button>
    <a href="http://localhost/Integration/Project/movieinformation.html?title=${title}">
    <button class="btn transparent">Cancel Order</button>
    </a>
    
    `;
}

function makepayment() {
    if(window.localStorage.getItem("userName")) {
        window.location.href =`http://localhost/Integration/Project/checkout.html?title=${title}&showtime=${showtime}&showdate=${showdate}&screenid=${screenid}&seatcount=${selectedSeatsCount}&seats=${seats}&totalticketprice=${document.getElementById("totalticketprice").innerHTML}`;
    }
    else {
        window.location.href =`http://localhost/Integration/Project/login.html`;
    }
    
}


