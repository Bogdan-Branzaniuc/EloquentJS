// buildGraph(edges: array)
function buildGraph(edges) {
    let graph = Object.create(null);
    function addEdge(from, to) {
        if (graph[from] == null) {
            graph[from] = [to];
        } else {
            graph[from].push(to);
        }
    }
    for (let [from, to] of edges.map(r => r.split("-"))) {
        addEdge(from, to);
        addEdge(to, from);
    }
    return graph;
}
const roads = [
    "Alice's House-Bob's House", "Alice's House-Cabin",
    "Alice's House-Post Office", "Bob's House-Town Hall",
    "Daria's House-Ernie's House", "Daria's House-Town Hall",
    "Ernie's House-Grete's House", "Grete's House-Farm",
    "Grete's House-Shop", "Marketplace-Farm",
    "Marketplace-Post Office", "Marketplace-Shop",
    "Marketplace-Town Hall", "Shop-Town Hall"
];
const roadGraph = buildGraph(roads)
console.log(roadGraph)

//Creating a state of the village
class VillageState {
    constructor(place, parcels) {
        this.place = place;
        this.parcels = parcels;
    }
    // mooving to a new location while deciding about the parcels 
    move(destination) {
        if (!roadGraph[this.place].includes(destination)) {
            return this;
        } else {
            let parcels = this.parcels.map(p => {
                if (p.place != this.place) return p;
                return { place: destination, address: p.address };
            }).filter(p => p.place != p.address);
            return new VillageState(destination, parcels);
        }
    }
    //creating random parcels
    static random(parcelCount = 100) {
        let parcels = [];

        for (let i = 0; i < parcelCount; i++) {
            let address = randomPick(Object.keys(roadGraph));
            let place;
            do {
                place = randomPick(Object.keys(roadGraph));
            } while (place == address);
            parcels.push({ place, address });
        }
        console.log(parcels)
        // return new VillageState("Post Office" :string, parcels :array);
        return new VillageState("Post Office", parcels);
    }
}

function runRobot(state, robot, memory = []) {
    for (let turn = 0; ; turn++) {
        if (state.parcels.length == 0) {
            console.log(`Done in ${turn} turns`);
            return turn
            break;
        }

        let action = robot(state, memory);
        state = state.move(action.direction);
        memory = action.memory;
        //console.log(`Moved to ${action.direction}`);
    }
}

function randomPick(array) {
    let choice = Math.floor(Math.random() * array.length);
    return array[choice];
}

// function randomRobot(state) {
//     return {
//         direction: randomPick(roadGraph[state.place])
//     }
// }

const mailRoute = [
    "Alice's House", "Cabin", "Alice's House", "Bob's House",
    "Town Hall", "Daria's House", "Ernie's House",
    "Grete's House", "Shop", "Grete's House", "Farm",
    "Marketplace", "Post Office"
];


function findRoute(graph, from, to) {
    let work = [{ at: from, route: [] }];
    for (let i = 0; i < work.length; i++) {
        let { at, route } = work[i];
        for (let place of graph[at]) {
            if (place == to) return route.concat(place);
            if (!work.some(w => w.at == place)) {
                work.push({ at: place, route: route.concat(place) });
            }
        }
    }
}

function goalOrientedRobot({ place, parcels }, route) {
    if (route.length == 0) {
        let parcel = parcels[0];
        if (parcel.place != place) {
            route = findRoute(roadGraph, place, parcel.place);
        } else {
            route = findRoute(roadGraph, place, parcel.address);
        }
    }
    return { direction: route[0], memory: route.slice(1) }
}

function findSmartRoute({ place, parcels }, route) {  //equivalent to function Robot and goalOrientedRobot
    let destRoutes = []
    let destinations = []
    let pickupRoutes = []
    let pickUps = []

    if (route.length == 0) {
        for (let parcel of parcels) {
            if (parcel.place != place) {
                pickUps.push(parcel.place)
            } else {
                destinations.push(parcel.address)
            }
        }
        //no duplicates for pickups and destinations
        pickUps = pickUps.filter((item, index) => pickUps.indexOf(item) === index)
        destinations = destinations.filter((item, index) => destinations.indexOf(item) === index)

        if (pickUps.length > 0) {
            for (let pick of pickUps) {
                pickupRoutes.push(findRoute(roadGraph, place, pick))
            }
            route = pickupRoutes.reduce((r, s) => r.length > s.length ? r : s)
        } else {
            for (let dest of destinations) {
                destRoutes.push(findRoute(roadGraph, place, dest))
            }
            route = destRoutes.reduce((r, s) => r.length < s.length ? r : s)
        }
    }
    return { direction: route[0], memory: route.slice(1) }
}

function compareRobots() {
    let score1 = 0
    let score2 = 0
    let counter = 0

    while (counter < 20000) {
        let vilageState = VillageState.random()
        score1 += runRobot(vilageState, goalOrientedRobot, mailRoute)
        score2 += runRobot(vilageState, findSmartRoute)
        counter++
    }
    console.log(`the first robot's trips: ${score1}`)
    console.log(`the secont robot's trips: ${score2}`)
    console.log(`the second robot was ${(score1 / score2).toFixed(3)} times faster`)

}

compareRobots()


