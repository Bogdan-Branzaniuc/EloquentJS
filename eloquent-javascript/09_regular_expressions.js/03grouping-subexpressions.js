let cartoonCrying = /boo+(hoo+)+/i;
console.log(cartoonCrying.test("Boohoooohoohooo"));
// → true
// he i at the end of the expression in the example makes this regular expression case insensitive, 
// allowing it to match the uppercase B in the input string,
// even though the pattern is itself all lowercase.