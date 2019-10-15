// Встроенный в Node.JS модуль для проверок
var assert = require('assert');

// Подключаем свою функцию
var lib = require('./every.js');

var every = [1, 2, 3, 4];
var result = lib.every(every, val => lib.predicate(val));
assert.deepEqual(result, true);

var notEvery = [1, 2, 3, -1];
var result = lib.every(notEvery, val => lib.predicate(val));
assert.deepEqual(result, false);

var notEvery2 = [1, -2, -3, 4];
var result = lib.every(notEvery2, val => lib.predicate(val));
assert.deepEqual(result, false);

var empty = [];
var result = lib.every(empty, val => lib.predicate(val));
assert.deepEqual(result, false);


var every = [1, 2, 3, 4];
var result = lib.everyRecursive(every, val => lib.predicate(val));
assert.deepEqual(result, true);

var notEvery2 = [1, 2, 3, -1];
var result = lib.everyRecursive(notEvery, val => lib.predicate(val));
assert.deepEqual(result, false);

// var notEvery2 = [1, -2, -3, 4];
// var result = lib.everyRecursive(notEvery2, val => lib.predicate(val));
// assert.deepEqual(result, false);

var notEvery2 = [-1, 2, 3, 4];
var result = lib.everyRecursive(notEvery2, val => lib.predicate(val));
assert.deepEqual(result, false);

var empty = [];
var result = lib.everyRecursive(empty, val => lib.predicate(val));
assert.deepEqual(result, false);

console.info('OK!');
