function registerCustomertoHTML(json) {
	console.log("register")
	data = JSON.parse(JSON.stringify(json))
	document.getElementById('apiResponse').innerHTML = data.successMsg;
}


function cpassword(event) {
	event.preventDefault();

    // main.js

// POST request using fetch()
console.log("Hello")
var formData = new FormData(document.getElementById("changepassword"))
console.log(formData)
dataToSend = Object.fromEntries(formData);
var em = 
console.log(dataToSend)
fetch("http://localhost:8080/changePassword/", {
	
	// Adding method type
	method: "PUT",
	// Adding body or contents to send
	body: JSON.stringify(dataToSend),	
	// Adding headers to the request
	headers: 
	{
		"Content-type": "application/json; charset=UTF-8"
	}
})

// Converting to JSON
.then(response => response.json())

    //window.location.reload(true);
	//window.location = "http://localhost/project/registrationconfirmation.html" ; 
}