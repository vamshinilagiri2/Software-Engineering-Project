function registerCustomertoHTML(json) {
	console.log("validate Email")
	data = JSON.parse(JSON.stringify(json))
	document.getElementById('apiResponse').innerHTML = data.successMsg;
}

function verifyemail(event) {
	event.preventDefault();

    // main.js

// POST request using fetch()
console.log("Hello")
var formData = new FormData(document.getElementById("verifyemail"))
console.log(formData)
dataToSend = Object.fromEntries(formData);
console.log(dataToSend)
var otp = dataToSend.otp1+dataToSend.otp2+dataToSend.otp3+dataToSend.otp4+dataToSend.otp5+dataToSend.otp6
console.log(otp)
fetch("http://localhost:8080/verifyverificationcode", {
	
	// Adding method type
	method: "PUT",
	// Adding body or contents to send
	body: JSON.stringify({'verificationCode':otp,'userName':dataToSend.userName}),
	
	// Adding headers to the request
	headers: {
		"Content-type": "application/json; charset=UTF-8"
	}
})

// Converting to JSON
.then(response => response.json())
.then(json => {
	console.log(json)
if(json.statusCode == 400)
{
	alert("Inavlid verification details")
}
else
{
	alert("User Verified Successfully")
	window.location = "http://localhost/Integration/Project/login.html" ; 
}
	})

    //window.location.reload(true);
	//window.location = "http://localhost/project/registrationconfirmation.html" ; 
}