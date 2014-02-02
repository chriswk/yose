var yose = yose || {};
yose.minesweeper = (function ($) {
	function init() {
		var d = document.data;
		$(".minesweeperEl").click(function () {
			var e = $(this),
			    row = e.attr("data-row"),
			    col = e.attr("data-col");
			if (d[row][col] === 'bomb') {
			    e.addClass("lost");
			}
		});
	}
	    
	return {
		init: init
	};
})(jQuery);