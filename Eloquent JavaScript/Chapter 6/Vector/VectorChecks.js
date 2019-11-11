// Встроенный в Node.JS модуль для проверок
var assert = require('assert');

// Подключаем свою функцию
var lib = require('./Vector.js');

var result = new lib.Vector(1, 2).repr;
assert.deepEqual(result, 'This vector: 1, 2');

var vector1 = new lib.Vector(1, 2);
var vector2 = new lib.Vector(2, 3);
var result = vector1.plus(vector2).repr;
assert.deepEqual(result, 'This vector: 3, 5');

var result = new lib.Vector(3, 4).length;
assert.deepEqual(result, 5);


console.info('OK!');
