function calculateSum(a, b, step = 1) {
    let sum = 0

    if (a > b) {
        step = step > 0 ? -1 : step
        for (i = a; i >= b; i += step) {
            sum += i
        }
    } else if (a < b) {
        for (i = a; i <= b; i += step) {
            sum += i
        }
    }
    return sum
}

console.log(calculateSum(1, 10))


function reverseArray(array) {
    let revArray = []
    for (i = array.length - 1; i >= 0; i--) {
        revArray.push(array[i])
    }
    return revArray
}

console.log(reverseArray([1, 2, 3, 4, 5]))

function reverseArrayInPlace(array) {
    for (i = 0; i < Math.floor(array.length / 2); i++) {
        let old = array[i]
        array[i] = array[array.length - 1 - i]
        array[array.length - 1 - i] = old
    }
    return array
}

console.log(reverseArrayInPlace([1, 2, 3, 4, 5]))





// function arrayToList(array) {
//     let list = {}
//     for (i = 0; i < array.length; i++) {
//         list = { value: array[i], rest: arrayToList(array.splice(1, array.length - 1)) }
//     }
//     return list
// }  -- My code

function arrayToList(array) {
    let list = {}
    for (let i = array.length - 1; i >= 0; i--) {
        list = { value: array[i], rest: list }
    }
    return list
}
// }  -- better Code
console.log(arrayToList([1, 2, 3]))


// function listToArray(list) {
//     let array = []
//     function buildArray(list) {
//         if (list.value) {
//             array.push(list.value)
//             return buildArray(list.rest)
//         }
//     }
//     buildArray(list)
//     return array
// } -- My code


function listToArray(list) {
    let array = [];
    for (let node = list; node; node = node.rest) {
        array.push(node.value);
    }
    return array;
}
// }  -- better Code
console.log(listToArray({ value: 1, rest: { value: 2, rest: { value: 3, rest: {} } } }))



function prepend(value, list) {
    return { value, rest: list }
}

console.log(prepend(30, { value: 1, rest: { value: 2, rest: { value: 3, rest: {} } } }))

function nth(n, list) {
    if (list) {
        if (n === 0) return list.value
        else return nth(n - 1, list.rest)
    }
}

console.log(nth(2, { value: 1, rest: { value: 2, rest: { value: 3, rest: {} } } }))





