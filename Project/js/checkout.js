const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const title = urlParams.get('title')
const showtime = urlParams.get('showtime')
const showdate = urlParams.get('showdate')
const resultGrid = document.getElementById('orderdetailscard');
const buttons = document.getElementById('finalbutton');

var un = window.localStorage.getItem('userName');

const screenid = urlParams.get('screenid');
const selectedSeatsCount = urlParams.get('seatcount');

const checkoutuserpaymentcardslist1 = document.getElementById('userpaymentcardslist1');
var data = {};

var un = window.localStorage.getItem('userName');
const api_url = "http://localhost:8080/getCheckoutDetails/" + un;

async function orderdetails() {
    resultGrid.innerHTML = `
    <p><h3>Your order</h3></p>
        <h4 >Movie: <span id="checkoutmovietitle">${title}</span> </h4>
        <h5 >Theatre: <span id="checkoutmovietheatre">UGA Theatre</span> </h5>
        <h5 >Show date: <span id="checkoutmovieshowdate">${showdate}</span> </h5>
        <h5 >Show time: <span id="checkoutmovieshowtime">${showtime} </span> </h5>
        <h5 >No of tickets: <span id="checkoutmovietickets">11</span> </h5>
        <h5 >Total Price: <span id="checkoutmovietotal">11</span> </h5>

    
    `;

    buttons.innerHTML = `
    <button class="btn btn-success px-3" type="button" onclick="window.location.href='http://localhost/Integration/Project/ordersummary.html?title=${title}&showtime=${showtime}&showdate=${showdate}&screenid=${screenid}&seatcount=${selectedSeatsCount}&seats=A1,A2,A3"';">Previous Page</button>
    <button class="btn btn-success px-3" type="button" onclick="confirmpayment()">Confirm Payment</button>
    `;

    const response = await fetch(api_url);
    data = await response.json();
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
    console.log(userpaymentcards);
    checkoutuserpaymentcardslist1.innerHTML = ``;
    for (let i of userpaymentcards) {
        console.log(i.cardNumber);
        checkoutuserpaymentcardslist1.innerHTML += `
		<option value="${i.cardNumber}"></option>
          `;
    }

}

function confirmpayment() {
    dataToSend = {};
    dataToSend["totalPrice"]=document.getElementById("checkoutmovietotal").innerHTML;
    dataToSend["numberOfTickets"]=document.getElementById("checkoutmovietickets").innerHTML;
    
    if (document.getElementById("checkoutpromocode")) {
        dataToSend["promotion"]={"promotionCode":document.getElementById("checkoutpromocode").innerHTML};
    }

    dataToSend["paymentCard"]={"cardNumber":document.getElementById("cardnumber").value};
    dataToSend["showdetails"] = {"showId": {"showDate" : showdate, "showTime" : showtime, "screen" : {"screenID" : screenid},}};
    dataToSend["movie"] = {"title": title};
    dataToSend["user"] = {"userName": un};

    fetch("http://localhost:8080/checkout/submitOrder",
    {

      // Adding method type
      method: "POST",

      // Adding body or contents to send
      body: JSON.stringify(dataToSend),

      // Adding headers to the request
      headers: {
        "Content-type": "application/json; charset=UTF-8"
      }
    })

    // Converting to JSON
    .then(response => response.json())
    .then(json => {
        if(json.statusCode==400) {
            alert(json.statusMessage)
            
        }
        else {
            window.location.href=`http://localhost/Integration/Project/orderconfirmation.html?title=${title}&showtime=${showtime}&showdate=${showdate}`; 
        }
    })
    
}





function loadcarddetails() {
    const userpaymentcards = data.paymentCards;



    const currentpaymentcardnumber = document.getElementById("userpaymentlist").value;
    for (let i of userpaymentcards) {


        if (currentpaymentcardnumber == i.cardNumber) {
            document.getElementById("cardholdername").value = data.firstName + " " + data.lastName;
            document.getElementById("cardnumber").value = i.cardNumber;
            const dateArr = i.expiryDate.split("-")
            let mm = dateArr[1]; // Months start at 0!
            let yyyy = dateArr[0];
            const formatteddate = yyyy + "-" + mm;
            console.log(mm);
            console.log(yyyy);
            console.log(i.expiryDate);
            document.getElementById("exp").value = formatteddate;

        }
    }



}

