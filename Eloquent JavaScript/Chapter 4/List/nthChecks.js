// Встроенный в Node.JS модуль для проверок
var assert = require('assert');

// Подключаем свою функцию
var lib = require('./nth.js');

let list = {
    '1': 1,
    'rest': {
        '2': 2, 
        'rest': {
            '3': 3,
            'rest': {
                '4': 4, 
                'rest': {
                    '5': 5,
                    'rest': null
                }
            }
        }
    }
}

var result = lib.nth(list, 3);
assert.deepEqual(result, 3);

var result = lib.nth(list, 666);
assert.deepEqual(result, null);

var result = lib.nthRecursive(list, 3);
assert.deepEqual(result, 3);

var result = lib.nthRecursive(list, 33);
assert.deepEqual(result, null);

console.info('OK!');

