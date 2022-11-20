// function canYouSpotTheProblem() {
//     "use strict";
//     for (counter = 0; counter < 10; counter++) {
//         console.log("Happy happy");
//     }
// }
// canYouSpotTheProblem();
// // → ReferenceError: counter is not defined


// function Person(name) { this.name = name; }
// let ferdinand = Person("Ferdinand"); // oops
// console.log(name);
// // → Ferdinand
// //So the bogus call to Person succeeded but returned an undefined value and
// //created the global binding name.In strict mode, the result is different.
// "use strict";

// function Person(name) { this.name = name; }
// let ferdinandd = Person("Ferdinand"); // forgot new
// // → TypeError: Cannot set property 'name' of undefined
"use strict"
function numberToString(n, base = 10) {
    let result = "", sign = "";
    if (n < 0) {
        sign = "-";
        n = -n;
    }
    do {
        result = String(n % base) + result;
        n = Math.floor(n / base)
    } while (n > 0);
    return sign + result;
}
console.log(numberToString(-13, 10));
    // → 1.5e-3231.3e-3221.3e-3211.3e-3201.3e-3191.3e…-3181.3