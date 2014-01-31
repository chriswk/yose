var primeFactors = function(request, response) {
	var number = request.query.number;
	var limit = log2(number);
	var decomposition = [];
	for (var i = 0; i<limit; i++) {
		decomposition.push(2);
	}
	response.send({number: number, decomposition: decomposition});
}

module.exports = primeFactors;

function log2(no) {
	return Math.log(no) / Math.LN2;
}