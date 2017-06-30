let side = 16; // number of squares per side

function createGrid() {
	for (let i = 0; i < (side * side); i++) {
		$("#grid").append("<div class='square'></div>");
	}
	$(".square").css("width", 900/side);
	$(".square").css("height", 900/side);
}

function paint() {
	$(".square").mouseenter(function(){
		$(this).addClass("colorify");
	});
}

$(document).ready(createGrid());
$(document).ready(paint());

$("button").on("click", function(){
	$(".square").removeClass("colorify");
	side = parseInt(prompt("Select number of squares per side"));
	createGrid();
	paint();
})