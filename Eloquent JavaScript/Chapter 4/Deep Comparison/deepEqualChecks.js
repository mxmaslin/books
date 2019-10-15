// Встроенный в Node.JS модуль для проверок
var assert = require('assert');

// Подключаем свою функцию
var lib = require('./deepEqual.js');

obj1 = {
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

obj2 = {
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

var result = lib.deepEqual(obj1, obj2);
assert.deepEqual(result, true);

obj1 = {
    '2': 1,
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

obj2 = {
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

var result = lib.deepEqual(obj1, obj2);
assert.deepEqual(result, false);

obj1 = {
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

obj2 = {
    '1': 2,
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

var result = lib.deepEqual(obj1, obj2);
assert.deepEqual(result, false);


obj1 = {
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

obj2 = {
    '1': 1,
    2: 1,
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

var result = lib.deepEqual(obj1, obj2);
assert.deepEqual(result, false);

obj1 = {
    '1': 2,
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

obj2 = {
    '1': 2,
    'rest': {
        '2': 2,
        'rest': {
            '3': 3
        }
    }
}

var result = lib.deepEqual(obj1, obj2);
assert.deepEqual(result, false);

console.info('OK!');

