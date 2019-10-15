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

/*
def deep_equal(obj1, obj2):
    if not obj1.keys() == obj2.keys():
    	return False

    for key in obj1.keys():
    	if not type(obj1[key]) == type(obj2[key]):
    		return False
    	if not (isinstance(obj1[key], dict) and isinstance(obj2[key], dict)) and (obj1[key] != obj2[key]):
    		return False
    	if isinstance(obj1[key], dict):
    		return deep_equal(obj1[key], obj2[key])

    return True
*/

function deepEqual(obj1, obj2) {
    if ((Object.keys(obj1).length !== Object.keys(obj2).length) ||
        (Object.keys(obj1).every((value, index) => value !== Object.keys(obj2)[index]))) {
        return false;
    }
    for (let key of Object.keys(obj1)) {
        if (typeof obj1[key] !== typeof obj2[key]) {
            return false;
        }
        if (!(typeof obj1[key] === 'object' && typeof obj2[key] === 'object') && (obj1[key] !== obj2[key])) {
            return false;
        }
        if (typeof obj1[key] === 'object' && obj1[key] !== null) {
            return deepEqual(obj1[key], obj2[key]);
        }
    }
    return true;
}

module.exports = {
    deepEqual: deepEqual
};

console.log(deepEqual(obj1, obj2));