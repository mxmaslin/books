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
    [Symbol.iterator]() {
        return new GroupIterator(this);
    }
}

class GroupIterator {
    constructor(group) {
        this.group = group;
        this.i = 0;
    }
    next() {
        if (this.i >= this.group.contents.length) return {done: true};
        let value = this.group.contents[this.i];
        this.i++;
        return {value, done: false};
    }
}

var group = Group.from([1, 2, 3]);

for (let e in group) {
    console.log(e);
    // not working properly, can't figure out why
}
