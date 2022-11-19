
const api_url = "http://localhost:8080/editProfile";
const resultGrid = document.getElementById('moviename');
console.log(api_url);
async function loadUser() {
  const response = await fetch(api_url);
  const data = await response.json();
  console.log(data)
  console.log("test")
  for (let i of data) {
    resultGrid.innerHTML += `
      <option value="${i.Title}"></option>
  
  `;
  }
}
loadUser();

function schedulemovie(event) {
  event.preventDefault();

  // main.js

  // POST request using fetch()
  console.log("Hello")
  var formData = new FormData(document.getElementById("schedulemovieform"))
  console.log(formData)
  dataToSend = Object.fromEntries(formData);

  var requestBody = {}
  requestBody.moviename = dataToSend["moviename"]
  requestBody.ScheduleDate = dataToSend["ScheduleDate"]
  requestBody.showtime = dataToSend["showtime"]

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
        window.location = "";
      }

    })
  //.then(json => {
  //window.location.reload(true);
  //window.location = "http://localhost/Integration/Project/Registrationconfirmation.html";})
}