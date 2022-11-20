specialForms.if = (args, scope) => {
    if (args.length != 3) {
        throw new SyntaxError("Wrong number of args to if");
    } else if (evaluate(args[0], scope) !== false) {
        return evaluate(args[1], scope);
    } else {
        return evaluate(args[2], scope);
    }
};


specialForms.while = (args, scope) => {
    if (args.length != 2) {
        throw new SyntaxError("Wrong number of args to while");
    }
    while (evaluate(args[0], scope) !== false) {
        evaluate(args[1], scope);
    }
    // Since undefined does not exist in Egg, we return false,
    // for lack of a meaningful result.
    return false;
};
// Another basic building block is do, which executes all its arguments from top
// to bottom.Its value is the value produced by the last argument.
specialForms.do = (args, scope) => {
    let value = false;
    for (let arg of args) {
        value = evaluate(arg, scope);
    }
    return value;
};
// To be able to create bindings and give them new values, we also create a
// form called define. It expects a word as its first argument and an expression
// producing the value to assign to that word as its second argument. Since
// define, like everything, is an expression, it must return a value. We’ll make it
// return the value that was assigned (just like JavaScript’s = operator).
specialForms.define = (args, scope) => {
    if (args.length != 2 || args[0].type != "word") {
        throw new SyntaxError("Incorrect use of define");
    }
    let value = evaluate(args[1], scope);
    scope[args[0].name] = value;
    return value;
};