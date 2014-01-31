var primeFactors = function(request, response) {
	var returnObject = {};
	var number = request.query.number;
	returnObject.number = number;
	if (isNaN(number)) {
		returnObject.error = "not a number";
	} else {
		var limit = log2(number);
		var decomposition = [];
		for (var i = 0; i<limit; i++) {
			decomposition.push(2);
		}
		returnObject.decomposition = decomposition;
	}
	response.send(returnObject);
}

module.exports = primeFactors;

function log2(no) {
	return Math.log(no) / Math.LN2;
}