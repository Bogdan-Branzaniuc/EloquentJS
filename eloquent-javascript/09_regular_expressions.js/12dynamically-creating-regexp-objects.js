let name = "harry";
let text = "Harry is a suspicious character.";
let regexp = new RegExp("\\b(" + name + ")\\b", "gi");
console.log(text.replace(regexp, "_$1_"));

// → _Harry_ is a suspicious character.



// When creating the \b boundary markers, we have to use two backslashes
// because we are writing them in a normal string, not a slash - enclosed regular expression.
// The second argument to the RegExp constructor contains the
// options for the regular expression—in this case, "gi" for global and case insensitive.
// But what if the name is "dea+hl[]rd" because our user is a nerdy teenager ?
//     That would result in a nonsensical regular expression that won’t actually match
// the user’s name.
// To work around this, we can add backslashes before any character that has
// a special meaning.
let name1 = "dea+h**++l[]rd"
let text1 = "This dea+h**++l[]rd guy is super annoying."
let escaped = name1.replace(/[\\[.+*?(){|^$]/g, "\\$&")
console.log(escaped)
let regexp1 = new RegExp("\\b" + escaped + "\\b", "gi")
console.log(text1.replace(regexp1, "_$&_"))
// → This _dea+hl[]rd_ guy is super annoying.

console.log(/[\\[.+*?(){|^$]/g.exec("dea+h**++l[]rd"))