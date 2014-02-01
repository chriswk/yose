var singleObject = require('./primefactor.decompose');

var primeFactorsUi = function(req, res) {
	res.render('primeFactors', {decomposition: resultString(req)});
}

function resultString(req) {
	var number = req.query.number || req.body.number;
	if (!number) {
		return "";
	} else if (isNaN(number)) {
		return number + " is not a number";
	} else {
		var result = singleObject(number);
		return result.error ? result.error : result.number +" = " +result.decomposition.join(" x ");
	} 
}


module.exports = primeFactorsUi;