class ExtendedMap extends Map {
    constructor() {
        super();
    }
    [Symbol.hasOwnProperty]() {
        return 'yay'
    }

}

module.exports = {
    ExtendedMap: ExtendedMap
};