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



class SymmetricMatrix extends Matrix {
    constructor(size, element = (x, y) => undefined) {
        super(size, size, (x, y) => {
            if (x < y) return element(y, x);
            else return element(x, y);
        });
    }
    set(x, y, value) {
        super.set(x, y, value);
        if (x != y) {
            super.set(y, x, value);
        }
    }
}
let matrix = new Matrix(5, 5, (x, y) => `${x},${y}`)
let matrix1 = new SymmetricMatrix(5, (x, y) => `${x},${y}`);

console.log(matrix1.get(2, 3));
console.log(matrix.get(2, 3));

// → 3,2