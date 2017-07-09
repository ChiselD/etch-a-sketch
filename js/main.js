let side = 16; // number of squares per side
// note to self: to do next: work with columns > rows
// to do so, check this: https://github.com/Demo318/etch-a-sketch

function createGrid() {
	for (let i = 0; i < side; i++) {
		$("#grid").append("<div class='column'></div>");
	}
	for (let i = 0; i < side; i++) {
		$(".column").append("<div class='square'></div>");
	}
	$(".column").css("width", 800/side + "px");
	$(".column").css("height", 800 + "px");
	$(".square").css("width", 800/side + "px");
	$(".square").css("height", 800/side + "px");
}

function paint() {
	$(".square").mouseenter(function(){
		$(this).addClass("colorify");
	});
}

function getNumber() {
	let userInput = parseInt(prompt("Select number of squares per side"));
	if (isNaN(userInput) || userInput === null) {
		alert("That was not a number... how about 16?");
		side = 16;
	} else if (userInput > 100) {
		alert("You cannot have more than 100 squares per side!");
		side = 16;
	} else {
		side = userInput;
	}
}

$(document).ready(createGrid());
$(document).ready(paint());

// "Clear Slate" function that refreshes the canvas and gets a new number of squares
$("button").on("click", function(){
	$(".square").removeClass("colorify");
	$("#grid").empty();
	getNumber();
	createGrid();
	paint();
})