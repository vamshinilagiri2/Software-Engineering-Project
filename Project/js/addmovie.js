async function converImageToBase64(inputId) {
	let image = $('#' + inputId)[0]['files']

	if (image && image[0]) {
		const reader = new FileReader();

		return new Promise(resolve => {
			reader.onload = ev => {
				resolve(ev.target.result)
			}
			reader.readAsDataURL(image[0])
		})
	}
}

async function proccessData(event) {
	if (event.target.files && event.target.files[0]) {
		var FR = new FileReader()
		FR.readAsDataURL(event.target.files[0])
		FR.onload = () => {
			document.getElementById("base64").value = FR.result
		}

	}
}






function addmovieform(event) {
	event.preventDefault();

	// main.js
	// POST request using fetch()
	console.log("Hello")
	var formData = new FormData(document.getElementById("movie"))
	console.log(...formData)
	dataToSend = Object.fromEntries(formData);

	var requestBody = {}
	requestBody.title = dataToSend["title"]
	requestBody.category = dataToSend["category"]
	requestBody.movieCast = dataToSend["movieCast"]
	requestBody.director = dataToSend["director"]
	requestBody.producer = dataToSend["producer"]
	requestBody.synopsis = dataToSend["synopsis"]
	requestBody.review = dataToSend["review"]
	requestBody.trailerLink = dataToSend["trailerLink"]
	requestBody.base64 = dataToSend["base64"]
	requestBody.rating = dataToSend["rating"]

	console.log(requestBody)
	fetch("http://localhost:8080/addMovie",
		{

			// Adding method type
			method: "POST",
			// Adding body or contents to send
			body: JSON.stringify(requestBody),
			// Adding headers to the request
			headers:
			{
				"Content-Type": "application/json",
				"Accept": "application/json"
			}
			//mode: 'no-cors'
		})

		// Converting to JSON
		.then(response => response.json())
		.then(json => {
			console.log(json)
			if (json.statusCode == 400) {
				alert(json.statusMessage);
			}
			else {
				alert("Movie Added Suceessfully");
			}

		})
	//.then(json => {
	//window.location.reload(true);
	//window.location = "http://localhost/Integration/Project/Registrationconfirmation.html";})

}


//---------Schedule Movie Function -------------//


function schedulemovieform(event) {
	event.preventDefault();

	// main.js
	// POST request using fetch()
	console.log("Hello")
	var formData1 = new FormData(document.getElementById("schedulemovieform"))
	console.log(...formData1)
	dataToSend = Object.fromEntries(formData1);

	var requestBody = { showdetails: [] }
	// requestBody.title=Avengers
	var screen = {}
	screen.screenID = dataToSend["screenID"]
	var show = { showDate: dataToSend["showDate"], showDuration: dataToSend["showDuration"], showTime: dataToSend["showTime"], screen: screen }
	requestBody.showdetails.push(show)
	// requestBody.screenID=dataToSend["screenID"]
	// requestBody.showDate=dataToSend["showDate"]
	// requestBody.showDuration = dataToSend["showDuration"]
	// requestBody.showTime = dataToSend["showTime"]

	console.log(requestBody)
	fetch("http://localhost:8080/addShow/" + dataToSend["title"],
		{

			// Adding method type
			method: "PUT",
			// Adding body or contents to send
			body: JSON.stringify(requestBody),
			// Adding headers to the request
			headers:
			{
				"Content-Type": "application/json",
				"Accept": "application/json"
			}
			//mode: 'no-cors'
		})

		// Converting to JSON
		.then(response => response.json())
		.then(json => {
			console.log(json)
			if (json.statusCode == 400) {
				alert(json.statusMessage);
			}
			else {
				alert("Show Added Suceessfully");
			}

		})
	//.then(json => {
	//window.location.reload(true);
	//window.location = "http://localhost/Integration/Project/Registrationconfirmation.html";})

}



function addpromodetails(event) {
	event.preventDefault();

	// main.js
	// POST request using fetch()
	console.log("Hello")
	var promocodedata = new FormData(document.getElementById("promodetails"))
	console.log(...promocodedata)
	dataToSend = Object.fromEntries(promocodedata);

	var requestBody = {}
	requestBody.promotionCode = dataToSend["promotionCode"]
	requestBody.startDate = dataToSend["startDate"]
	requestBody.endDate = dataToSend["endDate"]
	requestBody.promotional_Value = dataToSend["promotional_Value"]

	console.log(requestBody)
	fetch("http://localhost:8080/addPromotion",
		{

			// Adding method type
			method: "POST",
			// Adding body or contents to send
			body: JSON.stringify(requestBody),
			// Adding headers to the request
			headers:
			{
				"Content-Type": "application/json",
				"Accept": "application/json"
			}
			//mode: 'no-cors'
		})

		// Converting to JSON
		.then(response => response.json())
		.then(json => {
			console.log(json)
			if (json.statusCode == 400) {
				alert(json.statusMessage);
			}
			else {
				alert("Promo Code Added Suceessfully");
			}

		})
	//.then(json => {
	//window.location.reload(true);
	//window.location = "http://localhost/Integration/Project/Registrationconfirmation.html";})

}