require("../scripts.js");


function filter(array, test) {
    let passed = [];
    for (let element of array) {
        if (test(element)) {
            passed.push(element);
        }
    }
    return passed;
}
console.log(filter(SCRIPTS, script => script.living));
// → [{name: "Adlam", …}, …]


console.log(SCRIPTS.filter(s => s.direction == "ttb"));


//tranforming with 
function map(array, transform) {
    let mapped = [];
    for (let element of array) {
        mapped.push(transform(element));
    }
    return mapped;
}
let rtlScripts = SCRIPTS.filter(s => s.direction == "rtl");
console.log(map(rtlScripts, s => s.name));
// → ["Adlam", "Arabic", "Imperial Aramaic", …]


// summarizing with reduce

function reduce(array, combine, start) {
    let current = start;
    for (let element of array) {
        current = combine(current, element);
    }
    return current;
}
console.log(reduce([1, 2, 3, 4], (a, b) => a + b, 0));
// → 10

// added convenience , the starting point is the first element of the array
console.log([1, 2, 3, 4].reduce((a, b) => a + b));
// → 10