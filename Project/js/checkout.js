const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const title = urlParams.get('title')
const showtime = urlParams.get('showtime')
const showdate = urlParams.get('showdate')
const resultGrid = document.getElementById('orderdetailscard');
const buttons = document.getElementById('finalbutton');

var un = window.localStorage.getItem('userName');
const api_url = "http://localhost:8080/getCheckoutDetails/" + un;

async function orderdetails() {
    resultGrid.innerHTML = `
    <p><h3>Your order</h3></p>
        <h4>Movie: ${title}</h4>
        <h5>Theatre: UGA Theatre</h5>
        <h5>Show date: ${showdate}</h5>
        <h5>Show time: ${showtime}</h5>
    
    `;

    buttons.innerHTML = `
    <button class="btn btn-success px-3" type="button" onclick="window.location.href='http://localhost/Integration/Project/ordersummary.html?title=${title}&showtime=${showtime}&showdate=${showdate}';">Previous Page</button>
    <button class="btn btn-success px-3" type="button" onclick="window.location.href='http://localhost/Integration/Project/orderconfirmation.html?title=${title}&showtime=${showtime}&showdate=${showdate}';">Confirm Payment</button>
    `;

    const response = await fetch(api_url);
    const data = await response.json();
    console.log(data)
    console.log("test")
    document.getElementById("firstName").value = data.firstName;
    document.getElementById("lastName").value = data.lastName;
    document.getElementById("emailID").value = data.emailID;
    document.getElementById("street").value = data.address.street;
    document.getElementById("city").value = data.address.city;
    document.getElementById("state").value = data.address.state;
    document.getElementById("zipCode").value = data.address.zipCode;
    document.getElementById("phoneNumber").value = data.phoneNumber;
    // document.getElementById("cardnumber").value = data.paymentCards[0]['card_Number']
    // console.log(data.paymentCards[0]['address'].city)

    const userpaymentcards = data.paymentCards;
    for (let i of userpaymentcards) {
        userpaymentcardslist.innerHTML += `
          <option [value]="${i}">${i.cardNumber}</option>
          `;
    }
    
}
orderdetails();

function loadcarddetails() {
    console.log(document.getElementById("userpaymentlist").value)


}

