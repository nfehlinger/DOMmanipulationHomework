
var text = document.getElementById("message")
  , btn = document.getElementById("submit")
  ;

function changeText(){
	text.innerText = "Congratulations on knowing your username and password!"
};

function validate(){
	event.preventDefault();
	var user = document.getElementById("username").value
  , password = document.getElementById("password").value
  ;
	if(user.length < 14 && password == "12345678"){
		changeText();
	}else{
		alert("Incorrect username or password");
	};
};
document.addEventListener("submit", validate)