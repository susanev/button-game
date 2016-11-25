const NUM_BUTTONS = 4; 
var buttons = [];
var pairs = {};

window.onload = function() {
	buttons = Array.apply(null, {length: NUM_BUTTONS}).map(function (x, i) { return (i + 1).toString() });
	shuffleButtons();
	setAssociations();
};

function shuffleButtons() {
	for (let i = buttons.length; i > 0; i--) {
		let rand = Math.floor(Math.random() * i);
		[buttons[i - 1], buttons[rand]] = [buttons[rand], buttons[i - 1]];
	}
}

function setAssociations() {
	for (let i = 0; i < buttons.length - 1; i++) {
		pairs[buttons[i]] = buttons[i + 1];
	}
	pairs[buttons[buttons.length - 1]] = buttons[0];
}

function togglePair(tag) {
	var pair = document.getElementById(pairs[tag.getAttribute("id")]);
	if (pair === null) {
		throw "Pair Error";
	}
	toggle(tag);
	toggle(pair);
}

function toggle(tag) {
	if (tag.className == "on") {
		tag.className = "off";
	} else {
		tag.className = "on";
	}
}