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
fetch("https://demo0683848.mockable.io/testPOST", {
	
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

    //window.location.reload(true);
	//window.location = "http://localhost/project/registrationconfirmation.html" ; 


}