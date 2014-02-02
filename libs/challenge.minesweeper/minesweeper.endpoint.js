var minesweeper = function(req, res) {
	res.render('minesweeper', buildBoard(8, 8));
}

function buildBoard(rows, cols) {
	var board = {};
	board.rows = [];
	for (var i = 1; i<=rows; i++) {
	    var row = {columns: [], row: i-1};
		for (var j = 1; j<= cols; j++) {
		    row.columns.push({col: j-1, id: "cell-" +i +"x" +j});
		}
		board.rows.push(row);
	}
	return board;
}

module.exports = minesweeper;