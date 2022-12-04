const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const title = urlParams.get('title')
const showtime = urlParams.get('showtime')
const showdate = urlParams.get('showdate')
const resultGrid = document.getElementById('ordersummary');
const buttons = document.getElementById('col-buttons');

function orderdetails() 
{
    resultGrid.innerHTML = `
    Movie Name : ${title} <br>
    Theatre: UGA Theatre <br>
    Show date  : ${showdate} <br>
    Show time  : ${showtime} <br>
    Number of Seats Selected: 4
    
    `;

    buttons.innerHTML = `
    <a href="http://localhost/Integration/Project/checkout.html?title=${title}&showtime=${showtime}&showdate=${showdate}">
    <button class="btn accentric">Make Payment</button>
    </a>
    <a href="http://localhost/Integration/Project/movieinformation.html?title=${title}">
    <button class="btn transparent">Cancel Order</button>
    </a>
    
    `;
}


orderdetails();