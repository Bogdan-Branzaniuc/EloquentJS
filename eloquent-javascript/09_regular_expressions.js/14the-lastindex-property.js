let pattern = /y/g;
pattern.lastIndex = 3;
let match = pattern.exec("xyzzy");
console.log(match.index);
// → 4
console.log(pattern.lastIndex);
// → 5

let global = /abc/g;
console.log(global.exec("xyz abc"))
// → ["abc"]
let sticky = /abc/y;
console.log(sticky.exec("xyz abc"));
// → null

let digit1 = /\d/g;
console.log(digit1.exec("here it is: 1"));
// → ["1"]
console.log(digit1.exec("and now: 1"));
// → null

let digit = /\d/g;
console.log(digit.exec("here it is: 1"));
// → ["1"]
console.log(digit.exec("and nowssssssssssssss: 1"));
// → null
console.log(digit.exec("here it is: 1"));




// Another interesting effect of the global option is that it changes the way
// the match method on strings works. When called with a global expression,
// instead of returning an array similar to that returned by exec, match will find
// all matches of the pattern in the string and return an array containing the
// matched strings.
console.log("Banana".match(/an/g));
// → ["an", "an"]
// So be cautious with global regular expressions. The cases where they are
// necessary—calls to replace and places where you want to explicitly use lastIndex
// —are typically the only places where you want to use them.