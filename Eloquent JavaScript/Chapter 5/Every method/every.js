function every(arr, f) {
	if (arr.length === 0) return false;
	let satisfy = true;
	for(let el of arr) {
		if (!f(el)) {
			satisfy = false;
			break;
		}
	}
	return satisfy;
}

function everyRecursive(arr, f) {
	if (arr.length <= 1) return arr.some(f);
	if (!arr.slice(0, 1).some(f)) return false;
	return everyRecursive(arr.slice(1), f);
}

function predicate(val) {
	return val > 0;
}

module.exports = {
	every: every,
	everyRecursive: everyRecursive,
	predicate: predicate
};