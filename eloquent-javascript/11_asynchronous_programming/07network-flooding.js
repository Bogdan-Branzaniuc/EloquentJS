// The fact that nests can talk only to their neighbors greatly inhibits the usefulness of this network.
// For broadcasting information to the whole network, one solution is to set up
// a type of request that is automatically forwarded to neighbors. These neighbors
// then in turn forward it to their neighbors, until the whole network has received
// the message.
const { bigOak } = require("./crow-tech")
const { requestType, request } = require("./04networks-are-hard")
const { everywhere } = require("./crow-tech");

everywhere(nest => {
    nest.state.gossip = [];
});

function sendGossip(nest, message, exceptFor = null) {
    nest.state.gossip.push(message);
    for (let neighbor of nest.neighbors) {
        if (neighbor == exceptFor) continue;
        request(nest, neighbor, "gossip", message);
    }
}

requestType("gossip", (nest, message, source) => {
    if (nest.state.gossip.includes(message)) return;
    console.log(`${nest.name} received gossip '${message}' from ${source}`);
    sendGossip(nest, message, source);
});


request(bigOak, "Gilles' Garden", "gossip", "hahaha")


