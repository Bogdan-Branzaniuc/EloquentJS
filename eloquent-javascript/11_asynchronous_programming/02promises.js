const { bigOak } = require("./crow-tech.js")
let fifteen = Promise.resolve(15);
//fifteen.then(value => console.log(`Got ${value}`));
// → Got 15

// This is how you’d create a promise-based interface for the readStorage function
function storage(nest, name) {
    return new Promise(resolve => {
        nest.readStorage(name, result => resolve(result));
    });
}
// storage(bigOak, "enemies")
//     .then(value => console.log("Got", value))


module.exports = { storage }