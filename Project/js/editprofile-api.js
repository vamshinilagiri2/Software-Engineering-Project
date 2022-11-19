	  var un = window.localStorage.getItem('userName');
      const api_url = "http://localhost:8080/editProfile/"+un;
	  console.log(un);
	  console.log(api_url);
      async function loadUser() 
      {
        const response = await fetch(api_url);
 	    const data = await response.json();
		console.log(data)
		console.log("test")
        document.getElementById("firstName").value =data.firstName;
        document.getElementById("lastName").value=data.lastName;
        document.getElementById("uName").value=data.userName;
        document.getElementById("emailID").value=data.emailID;
        document.getElementById("street").value=data.address.street;
        document.getElementById("city").value=data.address.city;
        document.getElementById("state").value=data.address.state;
        document.getElementById("zipCode").value=data.address.zipCode;
        document.getElementById("phoneNumber").value=data.phoneNumber;
        document.getElementById("oldpassword").value=data.password;
        //document.getElementById("billingstreet").value=data.paymentCards.street;
        //document.getElementById("billingcity").value=data.paymentCards.city;
        //document.getElementById("billingstate").value=data.paymentCards.state;
        //document.getElementById("billingzipCode").value=data.paymentCards.zipCode;
        //document.getElementById("cardnumber").value=data.paymentCards.card_Number;
        //document.getElementById("expirationdate").value=data.paymentCards.expiryDate;
      }
      loadUser();

      function Manageprofile(event) {
        event.preventDefault();
      
          // main.js
      
      // POST request using fetch()
      console.log("Hello")
      var formData = new FormData(document.getElementById("manageprofile"))
      console.log(formData)
      dataToSend = Object.fromEntries(formData);
      if(dataToSend["promotionEnabled"]=="on")
      {
        dataToSend["promotionEnabled"]=true;
      }
      else
      {
        dataToSend["promotionEnabled"]=false;
      }
      
      
      console.log(dataToSend)
      fetch("http://localhost:8080/editProfile/update/"+un, 
	  {
        
        // Adding method type
        method: "PUT",
        
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


      function Managecreditprofile(event) {
        event.preventDefault();
      
          // main.js
      
      // POST request using fetch()
      console.log("Hello")
      var formData = new FormData(document.getElementById("creditprofile"))
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