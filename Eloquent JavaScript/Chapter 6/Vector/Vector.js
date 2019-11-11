class Vector {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
    plus(other_vector) {
        var x = this.x + other_vector.x;
        var y = this.y + other_vector.y;
        return new Vector(x, y);
    }
    minus(other_vector) {
        var x = this.x - other_vector.x;
        var y = this.y - other_vector.y;
        return new Vector(x, y);
    }
    get length(){
        return Math.sqrt(this.x ** 2 + this.y ** 2);
    }
    get repr() {
        return `This vector: ${this.x}, ${this.y}`;
    }

}

module.exports = {
    Vector: Vector
};

