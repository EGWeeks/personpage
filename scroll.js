$(document).ready(function() {
	// mouse Trail
	var $mouseT = $("#trail");
	$(document).mousemove(function(event) {
		$mouseT.css({left: (event.pageX + 3), top: (event.pageY + 15)});
	});
});