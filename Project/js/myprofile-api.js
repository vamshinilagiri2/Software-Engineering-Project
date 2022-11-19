
      const api_url = "https://demo1306745.mockable.io/editprofile";
      async function getUser() 
      {
		
        const response = await fetch(api_url);
 	    const data = await response.json();
        document.getElementById("firstname").value =data.firstName;
        document.getElementById("lastname").value=data.lastName;
        document.getElementById("userName").value=data.userName;
        document.getElementById("email").value=data.emailID;
        document.getElementById("street").value=data.address.street;
        document.getElementById("city").value=data.address.city;
        document.getElementById("state").value=data.address.state;
        document.getElementById("zipCode").value=data.address.zipCode;
        document.getElementById("phonenumber").value=data.phoneNumber;
        document.getElementById("password").value=data.password;
        document.getElementById("re-password").value=data.password;
        document.getElementById("card_Number").value=data.card_Number;
        document.getElementById("expiryDate").value=data.expiryDate;
		
      }
      getUser();
  
