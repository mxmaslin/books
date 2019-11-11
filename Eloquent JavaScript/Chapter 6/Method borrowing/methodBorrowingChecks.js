// Встроенный в Node.JS модуль для проверок
var assert = require('assert');

// Подключаем свою функцию
var lib = require('./methodBorrowing.js');

var extMap = new lib.ExtendedMap();

assert.deepEqual(extMap[hasOwnProperty](), 'yay');

console.log('OK!');
