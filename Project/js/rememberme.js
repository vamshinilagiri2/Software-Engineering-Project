function fetchdata() {
  var email= document.getElementById('userName').value;
  var password = document.getElementById('pswrd_1').value;

  document.cookie = "EmailAddress1 = " +email+"; path=http://localhost/Integration/Project/login.html";
  document.cookie = "Password = " +password+"; path=http://localhost/Integration/Project/login.html";
}

function getcookiedata() {

  var mail1 = getCookie('EmailAddress1');
  var Pswd = getCookie('Password');

  document.getElementById('userName').value = mail1;
  document.getElementById('pswrd_1').value = Pswd;
}

function getCookie(cname) {
  var name = cname + "=";
  var decodedCookie = decodeURIComponent(document.cookie);
  var ca = decodedCookie.split(';');
  for(var i = 0; i <ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}