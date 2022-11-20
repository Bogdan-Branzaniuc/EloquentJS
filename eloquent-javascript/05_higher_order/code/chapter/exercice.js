// Flattening

const data = [['a', 'b', 'c'], [3, 4, 4], [5, 6]]

//console.log(data.reduce((a, b) => a.concat(b)))

// Your Own Loop

const loop = (data, start, test, update, body) => {
    for (let value = start; test(data[value]); value = update(value)) {
        body(data[value])
    }
}

//loop(data, 0, n => n, n => n += 1, console.log)

//Everything 

const every = (array, predicate) => {
    for (let element of array) {
        if (!predicate(element)) return false
    }
    return true
}

console.log(every(data, (d) => d ? d.length > 1 : false))


const everySome = (array, predicate) => !array.some(element => !predicate(element))


console.log(everySome(data, (d) => d ? d.length > 1 : false))


//Dominant Writing Direction

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

//countBy (take direction out of it) . filter the no-script data

const DominantDir = (string) => {
    let directions = countBy(string, char => {
        const script = characterScript(char.codePointAt(0))
        return script ? script.direction : 'none'
    }).filter(name => name !== 'none')

    if (directions.length == 0) return "ltr";

    return directions.reduce((a, b) => a.count > b.count ? a : b).name

}

console.log(DominantDir('as漢字سثصقصثضشسيب'))