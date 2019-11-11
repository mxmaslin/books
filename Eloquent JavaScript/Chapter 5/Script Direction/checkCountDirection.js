// Встроенный в Node.JS модуль для проверок
var assert = require('assert');

// Подключаем свою функцию
var lib = require('./scriptDirection.js');

var result = lib.countDirection('"woof", "тяв"');
assert.deepEqual(result, '100% ltr');

console.info('OK!');
