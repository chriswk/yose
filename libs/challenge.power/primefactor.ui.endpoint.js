var singleObject = require('./primefactor.decompose');

var primeFactorsUi = function(req, res) {
	res.render('primeFactors', resultObject(req));
}

function resultObject(req) {
	var obj = {};
	var number = req.query.number || req.body.number;
	console.log(number);
	if (!number) {
		return "";
	} else if (Array.isArray(number)) {
		console.log("multiple inputs");
		obj.hasMultiple = true
		obj.results = number.map(function (ele) {
			return singleObject(ele, true)
		}).map(function (ele) {
			return extractString(ele);
		});
	} else {
		obj.hasMultiple = false;
		obj.decomposition = extractString(singleObject(number, true));
	}
	return obj; 
}

function extractString(obj) {
	return obj.error ? obj.error : obj.number + " = " + obj.decomposition.join(" x ");
}


module.exports = primeFactorsUi;