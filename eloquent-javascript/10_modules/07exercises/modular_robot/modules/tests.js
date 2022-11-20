//village state module
//goal oriented module
//smart-route module
const mailRoute = [
    "Alice's House", "Cabin", "Alice's House", "Bob's House",
    "Town Hall", "Daria's House", "Ernie's House",
    "Grete's House", "Shop", "Grete's House", "Farm",
    "Marketplace", "Post Office"
];

const { roadGraph } = require("./build-graph.js")
var VillageState = require("./village-state")
const goalOrientedRobot = require("./goal-oriented")
const findSmartRoute = require("./smart-route")
const runRobot = require("./robot.js")

function compareRobots() {
    let score1 = 0
    let score2 = 0
    let counter = 0

    while (counter < 500) {
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