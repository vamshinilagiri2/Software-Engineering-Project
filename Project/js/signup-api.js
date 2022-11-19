function registerCustomertoHTML(json) {
	console.log("register")
	data = JSON.parse(JSON.stringify(json))
	document.getElementById('apiResponse').innerHTML = data.successMsg;
}


function registercustomer(event) 
{
	event.preventDefault();

    // main.js
	// POST request using fetch()
console.log("Hello")
var formData = new FormData(document.getElementById("registerCustomerForm"))
console.log(formData)
dataToSend = Object.fromEntries(formData);

var requestBody = {}
requestBody.firstName=dataToSend["firstName"]
requestBody.lastName=dataToSend["lastName"]
requestBody.userName=dataToSend["userName"]
requestBody.password = dataToSend["password"]
requestBody.emailID = dataToSend["emailID"]
requestBody.phoneNumber = dataToSend["phoneNumber"]
if(dataToSend["promotionEnabled"]=="on")
{
	requestBody["promotionEnabled"]=true;
}
else
{
	requestBody["promotionEnabled"]=false;
}
billingAddress = {"street":dataToSend["street"],"city":dataToSend["city"],"state":dataToSend["state"],"zipCode":dataToSend["zipCode"]};
paymentCard = {"card_Number":dataToSend["card_Number"],"expiryDate":dataToSend["expiryDate"]}
paymentCard.address = billingAddress;
requestBody.paymentCards = [];
requestBody.paymentCards.push(paymentCard);
requestBody.address = {"street":dataToSend["street"],"city":dataToSend["city"],"state":dataToSend["state"],"zipCode":dataToSend["zipCode"]};



/*
const paymentCards = new Object();
paymentCards.card_Number = '';
paymentCards.expiryDate = '';
paymentCards.address = new Object();
	paymentCards.address.street = 'Independence',
	paymentCards.address.city = 'hshns',
	paymentCards.address.state = 'texas',
	paymentCards.address.zipCode = '54645';
*/
if(dataToSend["promotionEnabled"]=="on")
{
	dataToSend["promotionEnabled"]=true;
}
else
{
	dataToSend["promotionEnabled"]=false;
}
//var[] myobj = (card_Number:dataToSend["card_Number"], expiryDate:dataToSend["expiryDate"])

console.log(requestBody)
fetch("http://localhost:8080/registration", 
{
	
	// Adding method type
	method: "POST",
	// Adding body or contents to send
	body: JSON.stringify(requestBody),	
	// Adding headers to the request
	headers: 
	{
		"Content-Type": "application/json",
		"Accept":"application/json"
	}
	//mode: 'no-cors'
})

// Converting to JSON
.then(response => response.json())
.then(json => {
	console.log(json)
	if(json.statusCode == 400) 
	{
		alert(json.statusMessage);		
	}
	else 
	{
		window.location = "http://localhost/Integration/Project/Registrationconfirmation.html";
	}
	
	})
//.then(json => {
    //window.location.reload(true);
	//window.location = "http://localhost/Integration/Project/Registrationconfirmation.html";})

}