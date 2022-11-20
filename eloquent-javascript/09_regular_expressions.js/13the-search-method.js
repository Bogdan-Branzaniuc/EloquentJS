// The indexOf method on strings cannot be called with a regular expression. But
// there is another method, search, that does expect a regular expression. Like
// indexOf, it returns the first index on which the expression was found, or -1
// when it wasn’t found.
console.log(" word".search(/\S/));
// → 2
console.log(" ".search(/\S/));
// → -1
// Unfortunately, there is no way to indicate that the match should start at a
// given offset (like we can with the second argument to indexOf), which would
// often be useful.