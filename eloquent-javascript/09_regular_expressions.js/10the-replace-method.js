console.log("papa".replace("p", "m"));
// → mapa

console.log("Borobudur".replace(/[ou]/, "a"));
// → Barobudur
console.log("Borobudur".replace(/[ou]/g, "a"));
// → Barabadar


console.log(
    "Liskov, Barbara\nMcCarthy, John\nWadler, Philip"
        .replace(/(\w+), (\w+)/g, "$2 $1"));
// → Barbara Liskov
// John McCarthy
// Philip Wadler


let stock = "1 lemon, 2 cabbages, and 101 eggs";
function minusOne(match, amount, unit) {
    amount = Number(amount) - 1;
    if (amount == 1) { // only one left, remove the 's'
        unit = unit.slice(0, unit.length - 1);
    } else if (amount == 0) {
        amount = "no";
    }
    return amount + " " + unit;
}
console.log(stock.replace(/(\d+) (\w+)/g, minusOne));
// → no lemon, 1 cabbage, and 100 eggs


// It is possible to use replace to write a function that removes all comments
// from a piece of JavaScript code. Here is a first attempt:
function stripComments(code) {
    return code.replace(/\/\/.*|\/\*[^]*?\*\//g, "");
}
console.log(stripComments("1 + /* 2 */3"));
// → 1 + 3
155
console.log(stripComments("x = 10;// ten!"));
// → x = 10;
console.log(stripComments("1 /* a */+/* b */ 1"));
// → 1 1
