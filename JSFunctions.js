var userarr = []; // temporary array until we use DB-> begins at index 1
var signedin = 1;

function gotorules() {
	window.location.href = "Rules.html";
}
function gotogame() {
	window.location.href = "game.html";
}
function gotomenuingame() {
	var confirmdecision = true;
	confirmdecision = confirm("Are you sure you want to exit the game to menu? (Progress will not be saved)");
	if (confirmdecision == true) {
		window.location.href = "Menu.php";
	}
}

function gotomenu() {
	window.location.href = "Menu.php";
}

function register() {
	var xhttp = new XMLHttpRequest();
	var user = prompt("Please enter Your username.", "Risk Player");
	if (user != null || signedin == 1) {
		userarr.push(user);
		document.getElementById("fillthis").innerHTML = '<input type="Submit" onclick="gotogame()" class = "inbutton" id="Playgame"value="Play" />';
	}
	xhttp.onreadystatechange = function() {
		if (xhttp.readyState == 4 && xhttp.status == 200) {
			s
		}
	}
}

function signin() {
	signedin = 90;
}