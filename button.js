const NUM_BUTTONS = 4; 
var pairs = [];

window.onload = function() {
	fill(pairs);
	shuffle(pairs);
};

function fill(arr) {
	for (let i = 0; i < NUM_BUTTONS; i++) {
		arr[i] = i + 1;
	}
}

function shuffle(arr) {
	for (let i = arr.length; i > 0; i--) {
		let rand = Math.floor(Math.random() * i);
		[arr[i - 1], arr[rand]] = [arr[rand], arr[i - 1]];
	}
}

function toggle(tag) {
	var tagClass = tag.className;
	var pair = document.getElementById(getPairId(tag.getAttribute("id")));
	if (pair === null) {
		throw "Pair Error";
	}
	if (tagClass == "on") {
		tag.className = "off";
		pair.className = "off";

	} else {
		tag.className = "on";
		pair.className = "on";
	}
}

function getPairId(id) {
	for (let i = 0; i < pairs.length; i+=2) {
		if (id == pairs[i]) {
			return pairs[i + 1];
		} else if (id == pairs[i + 1]) {
			return pairs[i];
		}
	}
	return null;
}