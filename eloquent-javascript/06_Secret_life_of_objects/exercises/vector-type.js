class Vec {
    constructor(x, y) {
        this.x = x
        this.y = y
    }

    plus(z, n) {
        return (this.x + z, this.y + n)
    }

    minus(z, n) {
        return (this.x - z, this.y - n)
    }

    get longi() {
        return Math.sqrt(Math.pow(this.x, 2) + Math.pow(this.y, 2));
    }
}

let vector = new Vec(2, 3)

console.log(vector.longi)

