
let JOURNAL = require('./journal-data.js')
function phi(table) {
    return (table[3] * table[0] - table[2] * table[1]) /
        Math.sqrt((table[2] + table[3]) *
            (table[0] + table[1]) *
            (table[1] + table[3]) *
            (table[0] + table[2]));
}

function tableFor(event, JOURNAL) {
    let table = [0, 0, 0, 0];
    for (let i = 0; i < JOURNAL.length; i++) {
        let entry = JOURNAL[i], index = 0;
        if (entry.events.includes(event)) index += 1;
        if (entry.squirrel) index += 2;
        table[index] += 1;
    }
    return table;
}


function journalEvents(JOURNAL) {
    let events = [];
    for (let entry of JOURNAL) {
        for (let event of entry.events) {
            if (!events.includes(event)) {
                events.push(event);
            }
        }
    }
    return events;
}
console.log(journalEvents(JOURNAL));
// → ["carrot", "exercise", "weekend", "bread", …]

// for (let event of journalEvents(journal)) {
//     console.log(event + ":", phi(tableFor(event, journal)));
// }

for (let event of journalEvents(JOURNAL)) {
    let correlation = phi(tableFor(event, JOURNAL))
    if (correlation > 0.1 || correlation < -0.1) {
        console.log(event + ":", correlation)
    }
}


for (let entry of JOURNAL) {
    if (entry.events.includes("peanuts") &&
        !entry.events.includes("brushed teeth")) {
        entry.events.push("peanut teeth");
    }
}
console.log(phi(tableFor("peanut teeth", JOURNAL)));
// → 1

