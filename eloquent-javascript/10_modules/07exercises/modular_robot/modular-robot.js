// These are the bindings that the project from Chapter 7 creates:
// buildGraph & roads  array
// roadGraph
// VillageState
// runRobot
// randomPick
// randomRobot
// mailRoute
// routeRobot
// findRoute
// goalOrientedRobot

// If you were to write that project as a modular program, what modules would
// you create? Which module would depend on which other module, and what
// would their interfaces look like?
// Which pieces are likely to be available prewritten on NPM? Would you prefer
// to use an NPM package or write them yourself?




// Build Graph-module  self dependent

// Find Route       

// smart-route  & goal oriented robot  both depends on  Build Graph  & Find Route 

// Village State  

// Robot 

// Tests  deps :Robot && Village State && smart-route

// we are most likely to find the build graph, and the find route modules, and the 4th one as well ,comingle routes 
// I'd consider using the NPM more than write it myself, of course, only after I study the package and find it more suitable 