function checkPassword(){
    let password = document.getElementById("pswrd_1").value;
    let cnfrmPassword = document.getElementById("pswrd_2").value;
    console.log(" Password:", password,'\n',"Confirm Password:",cnfrmPassword);
    let message = document.getElementById("message");
	let button=document.getElementById("submitbutton");

    if(password.length != 0){
        if(password == cnfrmPassword){
            message.textContent = "Passwords match !!";
            message.style.backgroundColor = "#1dcd59";
			button.disabled = false
        }
        else{
            message.textContent = "Password don't match !";
            message.style.backgroundColor = "#ff4d4d";
			button.disabled = true
			
        }
    }
    else{
        alert("Password can't be empty!");
        message.textContent = "";
    }
}