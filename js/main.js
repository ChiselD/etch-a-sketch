let side = 16; // number of squares per side
// ...parseInt(prompt("Select number of squares per side"));

$(document).ready(function(){
	for (let i = 0; i < (side * side); i++) {
		$("#grid").append("<div class='square'></div>");
	}
	$(".square").css("width", 900/side);
	$(".square").css("height", 900/side);
});

$(document).ready(function(){
	$(".square").mouseenter(function(){
		$(this).addClass("colorify");
	});
});