require("../scripts.js");

function characterScript(code) {
    for (let script of SCRIPTS) {
        if (script.ranges.some(([from, to]) => {
            return code >= from && code < to;
        })) {
            return script;
        }
    }
}
console.log(characterScript(65));
// → {name: "Latin", …}

// Two emoji characters, horse and shoe
let horseShoe = "🐴👟";
console.log(horseShoe.length);
// → 4
console.log(horseShoe[0]);
// → (Invalid half-character)
console.log(horseShoe.charCodeAt(0));
// → 55357 (Code of the half-character)
console.log(horseShoe.codePointAt(0));
// → 128052 (Actual code for horse emoji)

let roseDragon = "🌹🐉";
for (let char of roseDragon) {
    console.log(char);
}
// → 🌹
// → 🐉

//recognizing text

function countBy(items, groupName) {
    let counts = [];
    for (let item of items) {
        let name = groupName(item);
        let known = counts.findIndex(c => c.name == name);
        if (known == -1) {
            counts.push({ name, count: 1 });
        } else {
            counts[known].count++;
        }
    }
    return counts;
}
console.log(countBy([1, 2, 3, 4, 5], n => n > 2));
// → [{name: false, count: 2}, {name: true, count: 3}]

// Using countBy, we can write the function that tells us which scripts are used
//in a piece of text.
function textScripts(text) {
    let scripts = countBy(text, char => {
        let script = characterScript(char.codePointAt(0));
        return script ? script.name : "none";
    }).filter(({ name }) => name != "none");
    let total = scripts.reduce((n, { count }) => n + count, 0);
    if (total == 0) return "No scripts found";
    return scripts.map(({ name, count }) => {
        return `${Math.round(count * 100 / total)}% ${name}`;
    }).join(", ");
}
const message = '英国的狗说狗"fdsafasdwe50178490sdafuio1u23489fdhsdihfa", 俄罗斯的狗说"тяв"'
console.log(message)
console.log(textScripts(message));
// → 61% Han, 22% Latin, 17% Cyrillic