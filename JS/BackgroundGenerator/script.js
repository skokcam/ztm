var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var rndBtn = document.querySelector(".randomize");

function setGradient() {
	body.style.background="linear-gradient(to right," + color1.value + "," + color2.value + ")";
	css.textContent = body.style.background + ";";
}

function rndByte(){
	var randomByte = Math.floor(Math.random()*255);
	return randomByte.toString(16); //convert to hexadecimal string
}

function pickRandomGradient(){
	color1.value = "#"+rndByte()+rndByte()+rndByte();
	color2.value = "#"+rndByte()+rndByte()+rndByte();
	setGradient();
}

color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);
rndBtn.addEventListener("click", pickRandomGradient);
color1.value="#FF0000";
color2.value="#FFFF00";
setGradient();

