// Unfortunately, getDate will also happily extract the nonsensical date 00-1-3000
// from the string "100-1-30000". A match may happen anywhere in the string, so
// in this case, it’ll just start at the second character and end at the second-to-last
// character.
// If we want to enforce that the match must span the whole string, we can add
// the markers ^ and $. The caret matches the start of the input string, whereas
// the dollar sign matches the end. So, /^\d+$/ matches a string consisting entirely
// of one or more digits, /^!/ matches any string that starts with an exclamation
// mark, and /x^/ does not match any string (there cannot be an x before the
// start of the string).
// If, on the other hand, we just want to make sure the date starts and ends
// on a word boundary, we can use the marker \b. A word boundary can be the
// start or end of the string or any point in the string that has a word character
// (as in \w) on one side and a nonword character on the other.
console.log(/cat/.test("concatenate"));
// // → true
console.log(/\bcat\b/.test("concatenate"));
// // → false
// Note that a boundary marker doesn’t match an actual character. It just
// enforces that the regular expression matches only when a certain condition
// holds at the place where it appears in the pattern.