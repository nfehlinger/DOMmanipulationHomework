var keez = document.getElementById("keypress");
var addSpace = false;
document.addEventListener("keypress", function(event){
	console.log(event.key);
	console.log(event.code);

	keez.innerText +=(addSpace ? " " : "") + event.key;

	if(event.code === "Space"){
		addSpace = true;
	}else{
		addSpace = false;
	}
});
