
list = {
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
def nth(lst, position):
    rest = lst
    while rest:
        num, rest_key = sorted(rest.keys(), key=lambda x: x == 'rest')
        if num == str(position):
            return rest[num]
        rest = rest[rest_key]
    return None

def nthRecursive(lst, position):
    rest = lst
    num, rest_key = sorted(rest.keys(), key=lambda x: x == 'rest')
    if num == str(position):
        return rest[num]
    elif rest[rest_key] == None:
        return None
    return nth(rest[rest_key], position)
*/


function nth(list, position) {
    var rest = list;
    while (rest) {
        let [num, rest_key] = Object.keys(rest).sort((a, b) => a == 'rest' ? 1: -1);
        if (num === String(position)) {
            return rest[num];
        }
        rest = rest[rest_key];
    }
    return null;
}

function nthRecursive(list, position) {
    var rest = list;
    let [num, rest_key] = Object.keys(list).sort((a, b) => a === 'rest'? 1 : -1);
    if (num === String(position)) {
        return rest[num];
    } else if (rest[rest_key] == null) {
        return null;
    }
    return nthRecursive(rest[rest_key], position);
}

module.exports = {
    nth: nth,
    nthRecursive: nthRecursive
};