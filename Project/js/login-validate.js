
	function validate() {
    var email = document.getElementById("email").value;
    var password = document.getElementById("pswrd_1").value;
    if (email== "admin" && password=="admin")
    {
        alert("Login Successful");
        // window.location.reload(true);
		 // window.location = "https://www.google.co.in/" ; 
		
		
        
    }
    else if (email== "" && password=="")
    {
        alert("Email and password cannot be blank ");
    }

    else {
        alert("Enter a Valid Email address and password")
    }
}

    
