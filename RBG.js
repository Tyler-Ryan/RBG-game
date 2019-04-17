body {
	background-color: #232323;
	margin: 0;
	font-family: "Montserrat", "Avenir"
}

.square {
	width: 30%;
	background: purple;
	padding-bottom: 30%;
	float: left;
	margin: 1.66%;
	border-radius: 15%;
	transition: background 0.6s;
	--webkit-transition: background 0.06s;
	--moz-transition: background 0.06s;
}

#container {
	margin: 20px auto;
	max-width: 600px;
}

h1 {
	color: white;
	text-align: center;
	font-weight: normal;
	text-transform: uppercase;
	background-color: steelblue;
	margin: 0;
	line-height: 1.1;
	padding: 20px 0;
}

#stripe {
	background-color: white;
	height: 30px;
	text-align: center;
}

.selected {
	color: white;
	background: steelblue;
}

#colorDisplay {
	font-size: 200%;
}

button {
	border: none;
	background: none;
	text-transform: uppercase;
	height: 100%;
	font-weight: 700;
	color: steelblue;  
	letter-spacing: 1px;
	font-size: inherit;
	transition: all 0.3s;
	--webkit-transition: all 0.3s;
	--moz-transition: all 0.3s;
	outline: none;

}

#message {
	display: inline-block;
	width: 20%;
	
}

button:hover {
	color: white;
	background: steelblue;
}
