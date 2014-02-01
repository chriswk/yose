var primeFactor = require("./primefactors");

var singleObject = function(number, specialError) {
	var returnObject = {};
	returnObject.number = number;
	console.log("number: " + number);
	if (isNaN(number)) {
		returnObject.error = specialError ? number + " is not a number" : "not a number";
	} else if (number > 1000000) {
		returnObject.error = "too big number (>1e6)";
	} else if (number < 0) {
		returnObject.error = number + " is not an integer > 1";
	} else {
		var limit = primeFactor(number);
		returnObject.decomposition = limit.split("*").map(function (el) {return parseInt(el)});
	}
	console.log(returnObject);
	return returnObject;
}

module.exports = singleObject;