//find route module
const findRoute = require('./find-route')
const { roadGraph } = require("./build-graph.js")


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

module.exports = findSmartRoute