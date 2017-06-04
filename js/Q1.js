
var elLeftBtn
  , elRightBtn
  , elListenerP
  , elNoHover;



	elLeftBtn = document.getElementById("imRight");
	elRightBtn = document.getElementById("nahKid");
	elListenerP = document.getElementById("listener");
	elLeftBtn.addEventListener("click", function(){
		elListenerP.innerText = "I'm right.";
	});
	elRightBtn.addEventListener("click", function(){
		elListenerP.innerText = "No, I'm right!";
	});