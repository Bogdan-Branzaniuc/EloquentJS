const { bigOak } = require("./crow-tech")
const { requestType, request } = require("./04networks-are-hard")

requestType("ping", () => "pong");

function availableNeighbors(nest) {
    let requests = nest.neighbors.map(neighbor => {
        return request(nest, neighbor, "ping")
            .then(() => true, () => false);
    });
    return Promise.all(requests).then(result => {
        return nest.neighbors.filter((_, i) => result[i]);
    });
}

const availability = availableNeighbors(bigOak)
availability.then((result) => console.log(result))


console.log(bigOak)