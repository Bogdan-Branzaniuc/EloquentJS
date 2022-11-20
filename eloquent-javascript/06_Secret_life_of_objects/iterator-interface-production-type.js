class Matrix {

    constructor(width, height, element = (x, y) => undefined) {
        this.width = width;
        this.height = height;
        this.content = [];

        this.x = 0;
        this.y = 0;

        this.constructor.prototype[Symbol.iterator] = function () {
            return this
        }

        for (let y = 0; y < height; y++) {
            for (let x = 0; x < width; x++) {
                this.content[y * width + x] = element(x, y);
            }
        }
    }
    get(x, y) {
        return this.content[y * this.width + x];
    }
    set(x, y, value) {
        this.content[y * this.width + x] = value;
    };

    next() {
        if (this.y == this.height) return { done: true };
        let value = {
            x: this.x,
            y: this.y,
            value: this.get(this.x, this.y)
        };
        this.x++;
        if (this.x == this.width) {
            this.x = 0;
            this.y++;
        }
        return { value, done: false };
    }
}


//console.log(matrix)

let matrix = new Matrix(200, 100, (x, y) => `value ${x + 1},${y + 1}`)

for (let { x, y, value } of matrix) {
    console.log(x, y, value);
}

// → 0 0 value 0,0
// → 1 0 value 1,0
// → 0 1 value 0,1
// → 1 1 value 1,1