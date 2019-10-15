/*
[1, 2, 3, 4, 5] -> [1, [2, [3, [4, [5]]]]]

[1, 2, 3, 4, 5]  []
[1, 2, 3, 4]     [5]
[1, 2, 3]        [4, [5]]
[1, 2]           [3, [4, [5]]]
[1] 			 [2, [3, [4, [5]]]]
[]               [1, [2, [3, [4, [5]]]]]

[1, 2, 3, 4, 5]

{
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

def listToArray(lst):
    arr = []
    rest = lst
    while rest:
        num, rest_key = sorted(rest.keys(), key=lambda x: x == 'rest')
        arr.append(rest[num])
        rest = rest[rest_key]
    return arr
*/

var list = {
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


function listToArray(list) {
	var arr = [];
	rest = list;
	while (rest) {
		let [num, rest_key] = Object.keys(rest).sort((a, b) => a == 'rest'? 1 : - 1);
		arr.push(rest[num]);
		rest = rest[rest_key];
	}
	return arr;
}

module.exports = {
    listToArray: listToArray
};