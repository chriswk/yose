var primeFactor = require("./primefactors");

var primeFactors = function(request, response) {
	if (Array.isArray(request.query.number)) {
		var returnObjects = request.query.number.map(singleObject);
	} else {
		returnObjects = singleObject(request.query.number);
	}
	response.send(returnObjects);
}

function singleObject(number) {
	var returnObject = {};
	returnObject.number = number;
	if (isNaN(number)) {
		returnObject.error = "not a number";
	} else if (number > 1000000) {
		returnObject.error = "too big number (>1e6)";
	} else {
		var limit = primeFactor(number);
		returnObject.decomposition = limit.split("*").map(function (el) {return parseInt(el)});
	}
	return returnObject;
}

module.exports = primeFactors;