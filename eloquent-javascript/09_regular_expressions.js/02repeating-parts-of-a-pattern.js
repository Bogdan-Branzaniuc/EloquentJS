// We now know how to match a single digit. What if we want to match a whole
// number—a sequence of one or more digits?
// When you put a plus sign (+) after something in a regular expression, it
// indicates that the element may be repeated more than once. Thus, /\d+/
// matches one or more digit characters.

console.log(/'\d+'/.test("'123'"));
// → true
console.log(/'\d+'/.test("''"));
// → false
console.log(/'\d*'/.test("'123'"));
// → true
console.log(/'\d*'/.test("''"));
// → true

// The star (*) has a similar meaning but also allows the pattern to match zero
// times. Something with a star after it never prevents a pattern from matching—
// it’ll just match zero instances if it can’t find any suitable text to match.


// A question mark makes a part of a pattern optional, meaning it may occur
// zero times or one time. In the following example, the u character is allowed to
// occur, but the pattern also matches when it is missing.
let neighbor = /neighbou?r/;
console.log(neighbor.test("neighbour"));
// → true
console.log(neighbor.test("neighbor"));
// → true



// To indicate that a pattern should occur a precise number of times, use braces.
// Putting {4} after an element, for example, requires it to occur exactly four
// times. It is also possible to specify a range this way: {2,4} means the element
// must occur at least twice and at most four times.
// Here is another version of the date and time pattern that allows both singleand 
//double-digit days, months, and hours. It is also slightly easier to decipher.
let dateTime = /\d{1,2}-\d{1,2}-\d{4} \d{1,2}:\d{2}/;
console.log(dateTime.test("1-30-2003 8:45"));
// → true

// You can also specify open-ended ranges when using braces by omitting the
// number after the comma. So, {5,} means five or more times.