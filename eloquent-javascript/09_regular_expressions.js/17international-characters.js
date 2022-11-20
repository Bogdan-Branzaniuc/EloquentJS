// Because of JavaScript’s initial simplistic implementation and the fact that this
// simplistic approach was later set in stone as standard behavior, JavaScript’s
// regular expressions are rather dumb about characters that do not appear in
// the English language. For example, as far as JavaScript’s regular expressions
// are concerned, a “word character” is only one of the 26 characters in the Latin
// alphabet (uppercase or lowercase), decimal digits, and, for some reason, the
// underscore character. Things like é or ß, which most definitely are word characters, will not match \w (and will match uppercase \W, the nonword category).
// By a strange historical accident, \s (whitespace) does not have this problem
// and matches all characters that the Unicode standard considers whitespace,
// including things like the nonbreaking space and the Mongolian vowel separator.
// Another problem is that, by default, regular expressions work on code units,
// as discussed in Chapter 5, not actual characters. This means characters that
// are composed of two code units behave strangely.
// console.log(/🍎{3}/.test("🍎🍎🍎"));
// // → false
// console.log(/<.>/.test("<🌹>"));
// // → false
// console.log(/<.>/u.test("<🌹>"));
// // → true

// The problem is that the 🍎 in the first line is treated as two code units, and
// the {3} part is applied only to the second one. Similarly, the dot matches a
// single code unit, not the two that make up the rose emoji.
// You must add a u option (for Unicode) to your regular expression to make
// it treat such characters properly. The wrong behavior remains the default,
// unfortunately, because changing that might cause problems for existing code
// that depends on it.
// Though this was only just standardized and is, at the time of writing, not
// widely supported yet, it is possible to use \p in a regular expression (that must
// have the Unicode option enabled) to match all characters to which the Unicode
// standard assigns a given property.
// console.log(/\p{Script=Greek}/u.test("α"));
// // → true
// console.log(/\p{Script=Arabic}/u.test("α"));
// // → false
// console.log(/\p{Alphabetic}/u.test("α"));
// // → true
// console.log(/\p{Alphabetic}/u.test("!"));
// // → false
// Unicode defines a number of useful properties, though finding the one that
// you need may not always be trivial. You can use the \p{Property=Value}
// notation to match any character that has the given value for that property. If
// the property name is left off, as in \p{Name}, the name is assumed to be either
// a binary property such as Alphabetic or a category such as Number.