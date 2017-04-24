<?php
	session_start();
?>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Menu</title>
<link href="appearence.css" type="text/css" rel="stylesheet" />
</head>
<body>
<div id = "flag"></div>

	<div id = "topheader"><h1>Risk: Arizona</h1></div>
	<div class = "buttons">
	
	<input type="Submit" onclick="gotorules()" class = "inbutton" id="Rules" value="Rules" />
	<br />
	<input type="Submit" onclick="register()" class = "inbutton" id="Register" name = "Register" value="Register" />
 	<input type="Submit" onclick="signin()" class = "inbutton" id="signin" name = "signin" value="Sign in" />
 	<br />
	<div id = "fillthis"><h3>You must Register or Sign in Before you Play</h3></div>
	
	</div>
	
	<script src="JSFunctions.js"></script>
	
	<div id = "botheader"><h1>By Gareth Ortiz-Timpson and Dominic Estevez</h1></div>
</body>
</html>