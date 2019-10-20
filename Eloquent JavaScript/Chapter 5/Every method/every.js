function every(arr, f) {
	for(let el of arr) {
		if (!f(el)) {
            return false;
		}
	}
	return true;
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