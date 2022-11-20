let message = '#'
for (i = 0; i < 7; i++) {
    console.log(message)
    message += '#'
}


function pritocesc(conditions) {
    while (conditions.length > 0) {
        return conditions[0].done ? pritocesc(conditions.splice(1, conditions.length - 1)) : 'slow down'
    }
    return 'Dive into work and never stop!!'
}

const conditions = [{
    title: 'SleepEnaugh',
    done: true
}, {
    title: 'EatWell',
    done: true
}, {
    title: 'Workout',
    done: true
}, {
    title: 'Meditate',
    done: true
}]

console.log(pritocesc(conditions))

//Enjoy!!