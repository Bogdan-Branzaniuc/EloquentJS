// Fill in this regular expression.
let number2 = /^((\-|\+)?\d+(e|E)?)?(\.|\-|\+)?(\d+(e|E)?(\d+)?)?$/;

let number = /^[+\-]?(\d+(\.\d*)?|\.\d+)([eE][+\-]?\d+)?$/

// Tests:
for (let str of ["1", "-1", "+15", "1.55", ".5", "5.",
    "1.3e2", "1E-4", "1e+12"]) {
    if (!number.test(str)) {
        console.log(`Failed to match '${str}'`);
    }
}
for (let str of ["1a", "+-1", "1.2.3", "1+1", "1e4.5",
    ".5.", "1f5", "."]) {
    if (number.test(str)) {
        console.log(`Incorrectly accepted '${str}'`);
    }
}


//cecks
 // - or + in front of the number
 // the decimal dot
 // exponent notation 5e-3 or 1E10  - whith an optional sign in front of the exponent