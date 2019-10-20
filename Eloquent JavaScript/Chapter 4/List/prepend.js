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
                    'rest': None
                }
            }
        }
    }
}
/*
def prepend(e, lst):
    return {e, 'rest': lst}
*/

function prepend(e, list) {
    return {value, rest: list};
}
