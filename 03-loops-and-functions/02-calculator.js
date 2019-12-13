// Code a calculator
const sum = (n1, n2) { // const sum = (a, b) => a + b
	return n1 + n2
}

const multiply = (n1, n2) {  // const multiply = (a, b) => a * b
	return n1 * n2
}

const subtraction = (n1, n2) { // const sub = (a, b) => a - b
	return n1 - n2	
}

const division = (n1, n2) {  // const div(a, b) => a / b
	return n1 / n2
}

module.exports = { sum, multiply, subtraction, division };