const topScope = Object.create(null);
topScope.true = true;
topScope.false = false;
// We can now evaluate a simple expression that negates a Boolean value.

let prog = parse(`if(true, false, true)`);
console.log(evaluate(prog, topScope));
// → false

// To supply basic arithmetic and comparison operators, we will also add some
// function values to the scope. In the interest of keeping the code short, we’ll
// use Function to synthesize a bunch of operator functions in a loop, instead of
// defining them individually

for (let op of ["+", "-", "*", "/", "==", "<", ">"]) {
    topScope[op] = Function("a, b", `return a ${op} b;`);
}
// A way to output values is also useful, so we’ll wrap console.log in a function
// and call it print.

topScope.print = value => {
    console.log(value);
    return value;
};


function run(program) {
    return evaluate(parse(program), Object.create(topScope));
}

// We’ll use object prototype chains to represent nested scopes so that the
// program can add bindings to its local scope without changing the top - level
// scope.
run(`
do(define(total, 0),
define(count, 1),
while(<(count, 11),
do(define(total, +(total, count)),
define(count, +(count, 1)))),
print(total))
`);
// → 55
