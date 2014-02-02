var yose = yose || {};
yose.minesweeper = (function ($) {
	function init() {
		var d = document.data;
		$("[data-click]").click(function () {
			var e = $(this),
			    row = e.attr("data-row"),
			    col = e.attr("data-col");
			    e.addClass(d[row][col]);
			    if (d[row][col] === "bomb") {
			    	e.addClass("lost");
			    }
			});
	}
	    
	return {
		init: init
	};
})(jQuery);