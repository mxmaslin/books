// Встроенный в Node.JS модуль для проверок
var assert = require('assert');

// Подключаем свою функцию
var lib = require('./arrayToList.js');

let arr = [1, 2, 3, 4, 5]

var result = lib.arrayToList(arr);

assert.deepEqual(result, {
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
});

console.info('OK!');

