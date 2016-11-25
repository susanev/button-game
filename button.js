const NUM_BUTTONS = 4; 
var buttons = [];
var pairs = {};

window.onload = function() {
	buttons = Array.apply(null, {length: NUM_BUTTONS}).map(function (x, i) { return i + 1 });
	shuffle(buttons);
	setAssociations(pairs);
};

function shuffle(arr) {
	for (let i = arr.length; i > 0; i--) {
		let rand = Math.floor(Math.random() * i);
		[arr[i - 1], arr[rand]] = [arr[rand], arr[i - 1]];
	}
}

function setAssociations(hash) {
	for (let i = 0; i < buttons.length - 1; i++) {
		pairs[buttons[i].toString()] = buttons[i + 1].toString();
	}
	pairs[buttons[buttons.length - 1].toString()] = buttons[0].toString();
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