var yose = yose || {};
yose.minesweeper = (function ($) {
	function init() {
		var d = document.data;
		$(".minesweeperEl").click(function () {
			var e = $(this),
			    row = e.attr("data-row"),
			    col = e.attr("data-col");
			    e.addClass(d[row][col]);
			}
		});
	}
	    
	return {
		init: init
	};
})(jQuery);