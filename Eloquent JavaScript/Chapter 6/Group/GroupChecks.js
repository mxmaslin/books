// Встроенный в Node.JS модуль для проверок
var assert = require('assert');

// Подключаем свою функцию
var lib = require('./Group.js');

var group = new lib.Group();
group.add(1);
group.add(1);
assert.deepEqual(group.contents, [1]);

assert.deepEqual(group.has(1), true);
assert.deepEqual(group.has(2), false);

group.delete(1);
assert.deepEqual(group.contents, []);

var newGroup = lib.Group.from([1, 1, 2]);
assert.deepEqual(newGroup.contents, [1, 2]);

console.log('OK!');
