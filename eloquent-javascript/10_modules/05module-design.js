// For example, there’s the dijkstrajs package. A well-known approach to
// pathfinding, quite similar to our findRoute function, is called Dijkstra’s algo
// rithm, after Edsger Dijkstra, who first wrote it down. The js suffix is often
// added to package names to indicate the fact that they are written in JavaScript.
// This dijkstrajs package uses a graph format similar to ours, but instead of
// arrays, it uses objects whose property values are numbers—the weights of the
// edges.
// So if we wanted to use that package, we’d have to make sure that our graph
// was stored in the format it expects. All edges get the same weight since our
// simplified model treats each road as having the same cost (one turn).


const { find_path } = require("dijkstrajs");
let graph = {};
for (let node of Object.keys(roadGraph)) {
    let edges = graph[node] = {};
    for (let dest of roadGraph[node]) {
        edges[dest] = 1;
    }
}
console.log(find_path(graph, "Post Office", "Cabin"));
// → ["Post Office", "Alice's House", "Cabin"]