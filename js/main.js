let side = 16; // number of squares per side

function createGrid() {
	for (let i = 0; i < (side * side); i++) {
		$("#grid").append("<div class='square'></div>");
	}
	$(".square").css("width", 100/side + "%");
	$(".square").css("height", 100/side + "%");
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
	// $(".square").removeClass("colorify");
	while ($("#grid").firstChild) {
		$("#grid").removeChild($("#grid").firstChild);
	}
	getNumber();
	createGrid();
	paint();
})