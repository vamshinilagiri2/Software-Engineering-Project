const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const title = urlParams.get('title')
const showtime = urlParams.get('showtime')
const showdate = urlParams.get('showdate')
const resultGrid = document.getElementById('orderdetailscard');

function orderdetails() {
    resultGrid.innerHTML = `
    <p><h3>Your order</h3></p>
        <h4>Movie: ${title}</h4>
        <h5>Theatre: UGA Theatre</h5>
        <h5>Show date: ${showdate}</h5>
        <h5>Show time: ${showtime}</h5>
    
    `;
}
orderdetails();
