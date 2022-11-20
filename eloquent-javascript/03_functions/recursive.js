function findSolution(target) {

    function find(current, history) {
        if (current === target) {
            return history;
        } else if (current > target) {
            return null;
        } else {
            return find(current + 5, `(${history} + 5)`) ||
                find(current * 3, `(${history} * 3)`) ||
                find(current * 5, `(${history} * 5)`)
        }
    }
    return find(1, "1")
}

console.log(findSolution(42))


const power = (base, exponent) => exponent === 0 ? 1 : base * power(base, exponent - 1)

//console.log(power(2, 40))



