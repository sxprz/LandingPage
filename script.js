const year = new Date().getFullYear();

function about() {
	alert(`© ${year} suprize`);
}

function contact() {
	alert("Visit\ngithub.com/sxprz\nto look into other projects.");
}

function references() {
	alert("Thanks to ProgrammingHub for teaching me how to use basic JavaScript!");
}

alert("Welcome to suprize's landing page!\nMore JavaScript is coming soon.");
document.getElementById("footer0").innerHTML = `${year}`;