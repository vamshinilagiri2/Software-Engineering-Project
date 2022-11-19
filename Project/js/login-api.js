function registerCustomertoHTML(json) {
	console.log("login")
	data = JSON.parse(JSON.stringify(json))
	document.getElementById('apiResponse').innerHTML = data.successMsg;
}


function loginform(event) {
	event.preventDefault();

    // main.js

// POST request using fetch()
console.log("Hello")
var formData = new FormData(document.getElementById("loginform"))
console.log(formData)
dataToSend = Object.fromEntries(formData);
console.log(dataToSend)
fetch("http://localhost:8080/login/", {
	
	// Adding method type
	method: "POST",
	
	// Adding body or contents to send
	body: JSON.stringify(dataToSend),
	
	// Adding headers to the request
	headers: {
		"Content-type": "application/json; charset=UTF-8"
	}
})

.then(response => response.json())
.then(json => {
	console.log(json);
	window.localStorage.setItem('userName', json.userName);
	window.localStorage.setItem('password', json.password); 
	//window.location.reload(true);
	if(json.statusCode == 400)
	{
		alert("Inavlid credentials")
	}
	else
	{
		if(json.usertype.roleID==2)
		{window.location = "http://localhost/Integration/Project/home-after-login.html" ;}
		else
		{
		window.location = "http://localhost/Integration/Project/adminpage.html" ;
		}
		
	}
	

	});

}


