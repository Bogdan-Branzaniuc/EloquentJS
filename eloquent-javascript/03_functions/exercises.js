function findMin(a, b) {
    if (a === b) {
        return 'even numbers'
    }
    return a < b ? a : b
}



function isEven(n) {
    while (n >= 0) {
        if (n === 0) {
            return true
        } else if (n === 1) {
            return false
        } else {
            return isEven(n - 2)
        }
    }
    return 'oops'
}

//console.log(isEven(100))

function countBs(string, letter) {
    function findB(current, number) {
        while (current < string.length - 1) {
            if (string[current] === letter) {
                number += 1
            }
            current += 1
            return findB(current, number)
        }
        return number
    }
    return findB(-1, 0)
}

console.log(countBs('BaraBulllllle', 'l'))