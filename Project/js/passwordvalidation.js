let lowercase = document.getElementById('lower');
let uppercase = document.getElementById('upper');
let numbercase = document.getElementById('number');
let specialcase = document.getElementById('special');
let lengthcase = document.getElementById('length');
let button=document.getElementById("submitbutton");




function validation(data) {
    const lower = new RegExp('(?=.*[a-z])');
    const upper = new RegExp('(?=.*[A-Z])');
    const number = new RegExp('(?=.*[0-9])');
    const special = new RegExp('(?=.*[!@#\$%\^&\*])');
    const length = new RegExp('(?=.{8,})');

    if(lower.test(data)) {
        lowercase.classList.add('valid')
        
      } else {
        lowercase.classList.remove('valid')

        
      }

    if(upper.test(data)) {
        uppercase.classList.add('valid')
      } else {
        uppercase.classList.remove('valid')
      }
    
    if(number.test(data)) {
        numbercase.classList.add('valid')
      } else {
        numbercase.classList.remove('valid')
      }

    if(special.test(data)) {
        specialcase.classList.add('valid')
      } else {
        specialcase.classList.remove('valid')
      }

    if(length.test(data)) {
        lengthcase.classList.add('valid')
      } else {
        lengthcase.classList.remove('valid')
      }
}
function validation2(data) {
    if (lowercase.classList,uppercase.classList,numbercase.classList,specialcase.classList,lengthcase.classList== "valid" )
    {
        button.disabled = false
    }
    else {
        button.disabled = true
        alert("Check Password !! ")
    }
    
}