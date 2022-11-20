const x = 1;
function evalAndReturnX(code) {
    eval(code);
    return x;
}
console.log(evalAndReturnX("var x = 2"));
// → 2
console.log(x);
// → 1


// A less scary way of interpreting data as code is to use the Function constructor. 
// It takes two arguments: a string containing a comma-separated list
// of argument names and a string containing the function body. It wraps the
// code in a function value so that it gets its own scope and won’t do odd things
// with other scopes.
let plusOne = Function("n", "return n + 1;");
console.log(plusOne(4));
// → 5
// This is precisely what we need for a module system. We can wrap the
// module’s code in a function and use that function’s scope as module scope.