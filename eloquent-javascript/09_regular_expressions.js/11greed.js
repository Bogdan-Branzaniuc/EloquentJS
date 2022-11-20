// It is possible to use replace to write a function that removes all comments
// from a piece of JavaScript code. Here is a first attempt:
function stripComments(code) {
    return code.replace(/\/\/.*|\/\*[^]*\*\//g, "");
}
console.log(stripComments("1 + /* 2 */3"));
// → 1 + 3
console.log(stripComments("x = 10;// ten!"));
// → x = 10;
console.log(stripComments("1 /* a */+/* b */ 1"));
// → 1 1
// The part before the or operator matches two slash characters followed by any
// number of non-newline characters. The part for multiline comments is more
// involved. We use [^] (any character that is not in the empty set of characters)
// as a way to match any character. We cannot just use a period here because
// block comments can continue on a new line, and the period character does not
// match newline characters.
// But the output for the last line appears to have gone wrong. Why?
// The [^]* part of the expression, as I described in the section on backtracking,
// will first match as much as it can. If that causes the next part of the pattern to
// fail, the matcher moves back one character and tries again from there. In the
// example, the matcher first tries to match the whole rest of the string and then
// moves back from there. It will find an occurrence of */ after going back four
// characters and match that. This is not what we wanted—the intention was to
// match a single comment, not to go all the way to the end of the code and find
// the end of the last block comment.
// Because of this behavior, we say the repetition operators (+, *, ?, and {}
// ) are greedy, meaning they match as much as they can and backtrack from
// there. If you put a question mark after them (+?, *?, ??, {}?), they become
// nongreedy and start by matching as little as possible, matching more only when
// the remaining pattern does not fit the smaller match.
// And that is exactly what we want in this case. By having the star match
// the smallest stretch of characters that brings us to a */, we consume one block
// comment and nothing more.
function stripComments(code) {
    return code.replace(/\/\/.*|\/\*[^]*?\*\//g, "");
}
console.log(stripComments("1 /* a */+/* b */ 1"));
// → 1 + 1
// A lot of bugs in regular expression programs can be traced to unintentionally
// using a greedy operator where a nongreedy one would work better. When using
// a repetition operator, consider the nongreedy variant first.