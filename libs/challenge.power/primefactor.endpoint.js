var primeFactor = require("./primefactors");

var primeFactors = function(request, response) {
	var returnObjects = [];
	for (var n in request.query.number) {
		var returnObject = {};
		var number = request.query.number[n];
		returnObject.number = number;
		if (isNaN(number)) {
			returnObject.error = "not a number";
		} else if (number > 1000000) {
			returnObject.error = "too big number (>1e6)";
		} else {
			var limit = primeFactor(number);
			returnObject.decomposition = limit.split("*").map(function (el) {return parseInt(el)});
		}
		returnObjects.push(returnObject);
	}
	response.send(returnObjects);
}

module.exports = primeFactors;