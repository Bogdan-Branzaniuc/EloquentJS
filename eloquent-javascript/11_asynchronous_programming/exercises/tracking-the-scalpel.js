const { bigOak } = require("../crow-tech")
const { storage } = require("../02promises")
const routeRequest = require("../08message-routing")
const { requestType, request } = require("../04networks-are-hard")

requestType("storage", (nest, content, source, done) => {
    console.log(`${nest.name} received note: ${content} from: ${source}`);
})


function anyStorage(nest, source, name) {
    if (source == nest.name) return storage(nest, name);
    else return routeRequest(nest, source, "storage", name);
}

console.log(bigOak)
async function locateScalpel(nest) {
    let current = nest.name
    for (; ;) {
        let next = await anyStorage(nest, current, "scalpel")
        if (next == current) return current
        current = next
    }

}

function locateScalpel2(nest) {
    function loop(current) {
        return anyStorage(nest, current, "scalpel").then(next => {
            if (next == current) return current;
            else return loop(next);
        });
    }
    return loop(nest.name);
}

locateScalpel(bigOak).then(console.log);
// → Butcher's Shop
locateScalpel2(bigOak).then(console.log);
// → Butcher's Shop