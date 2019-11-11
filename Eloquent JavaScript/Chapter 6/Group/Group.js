class Group {
    constructor() {
        this.contents = [];
    }
    add(item) {
        if (this.contents.indexOf(item) < 0) {
            this.contents.push(item);
        }
    }
    delete(item) {
        let item_idx = this.contents.indexOf(item);
        if (item_idx >= 0) {
            this.contents.splice(item_idx, 1);
        }
    }
    has(item) {
        if (this.contents.indexOf(item) >= 0) {
            return true;
        }
        return false;
    }
    static from(iterable) {
        let newGroup = new Group();
        for (let item of iterable) {
            if (newGroup.contents.indexOf(item) < 0) {
                newGroup.contents.push(item);
            }
        }
        return newGroup;
    }
}

module.exports = {
    Group: Group
};