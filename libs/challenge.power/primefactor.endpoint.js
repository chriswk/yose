var prime = require("./primefactors");

var primeFactors = function(request, response) {
	var returnObject = {};
	var number = request.query.number;
	returnObject.number = number;
	if (isNaN(number)) {
		returnObject.error = "not a number";
	} else {
		var limit = prime(number);
		returnObject.decomposition = limit.split("*").map(function (el) {return parseInt(el)});
	}
	response.send(returnObject);
}

module.exports = primeFactors;

function log2(no) {
	return Math.log(no) / Math.LN2;
}