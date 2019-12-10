// Logical "&&"" Operator
let rain = true;
let wind = true;
let day = "Saturday";
let sunny = true;
let raining = "raining";

function weather() {
	if (rain && wind) {
		return "Really stay at home!";
	}	

	else if (day === "Saturday" || day === "Sunday") { // Logical "||" Operator
		return "It's Weekend!";
	}

	else if (!sunny) { // Logical "!" Operator
		return "Cancel the beach";
	}	
	
	else if (raining !== "sunny") { // Extra "!" logical Operator
   return "Cancel the beach";
	}
}

// console.log( weather([rain, wind]) );

module.exports = weather;