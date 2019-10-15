function loop(value, conditionFunc, updateFunc, bodyFunc) {
	while (conditionFunc(value)) {
		bodyFunc(value);
		value = updateFunc(value);
	}
}

function conditionFunc(value) {
	return value <= 10;
}

function updateFunc(value) {
	return value + 1;
}

// module.exports = {
// 	loop: loop,
// 	conditionFunc: conditionFunc,
// 	updateFunc: updateFunc
// }

loop(5, conditionFunc, updateFunc, console.log);