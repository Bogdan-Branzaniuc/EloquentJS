class Group {
    constructor() {
        this.members = []
        this.x = 0

        this.constructor.prototype[Symbol.iterator] = function () {
            return this
        }
    }

    add(value) {
        if (!this.has(value)) this.members.push(value)
    }
    delete(value) {
        if (this.has(value)) this.members = this.members.filter(v => v !== value)
    }
    has(value) {
        return this.members.includes(value)
    }
    static from(colection) {
        let group = new Group
        for (let value of colection) {
            group.add(value)
        }
        return group
    }
    next() {
        if (this.x > this.members.length - 1) return { done: true }
        this.x++
        console.log(this.x)
        this.add(this.x)
        return this
    }
    hasOwnProperty() {
        return 1
    }
}

let group = Group.from([1, 3, 5, 20])

console.log(group.has(30));

for (let g of group) {
    console.log(group)
}

