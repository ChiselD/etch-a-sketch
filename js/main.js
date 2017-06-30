// let numSquares = parseInt(prompt("Select number of squares per side"));

$(document).ready(function(){
	for (let i = 0; i < 4; i++) {
		$("#grid").append("<div class='square'></div>");
	}
	$(".square").css("width", 900/4);
	$(".square").css("height", 900/4);
});