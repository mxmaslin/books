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
	1: 1,
	rest: {
		2: 2,
		rest: {
			3: 3,
			rest: {
				4: 4, 
				rest: {
					5: 5,
					rest: null
				}
			}
		}
	}
}

def array_to_list(arr):
    rest = None
    for i in reversed(range(len(arr))):
        rest = {'rest': rest}
        rest[i + 1] = arr[i]

    return rest

*/

function arrayToList(arr) {
	var rest = null;
	for (let i = arr.length; i > 0; i--) {
		rest = {'rest': rest};
		rest[i] = arr[i - 1];
	}
	return rest;
}

module.exports = {
    arrayToList: arrayToList
};
