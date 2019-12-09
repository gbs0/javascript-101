// Logical "&&"" Operator
let rain = true;
let wind = true;
let day = "Saturday";
let sunny = true;
let raining = "raining";

function weather([]) {
	if (rain && wind) {
		return "Really stay at home!";
	}	

	if (day === "Saturday" || day === "Sunday") { // Logical "||" Operator
		return "It's the week-end!";
	}

	if (!sunny) { // Logical "!" Operator
		return "Cancel the beach";
	}	
	
	if (weather !== "sunny") { // Extra "!" logical Operator
   return "Cancel the beach";
	}
}

module.exports = weather;
