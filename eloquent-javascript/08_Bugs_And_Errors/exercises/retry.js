class MultiplicatorUnitFailure extends Error { }

function primitiveMultiply(a, b) {
    let chance = Math.floor(Math.random() * 100)
    if (chance <= 20) {
        return a * b
    } else {
        throw new MultiplicatorUnitFailure('Klunk')
    }
}

function reliableMultiply(a, b) {
    let counter = 1
    for (; ;) {
        try {
            console.log(primitiveMultiply(a, b))
            break;
        } catch (e) {
            if (!(e instanceof MultiplicatorUnitFailure)) throw e  // very important !!
            counter++
        }
    }
    return counter + " tryes"
}


console.log(reliableMultiply(8, 8))