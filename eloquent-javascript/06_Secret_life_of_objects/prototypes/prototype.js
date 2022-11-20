console.log(Object.getPrototypeOf({}) === Object.prototype);

// → true
console.log(Object.getPrototypeOf(Object.prototype));
// → null

console.log(Object.getPrototypeOf(Math.max));
// → true


let protoRabbit = {
    speak(line) {
        console.log(`The ${this.type} rabbit says '${line}'`);
    }
};
let killerRabbit = Object.create(protoRabbit);
killerRabbit.type = "killer";
killerRabbit.speak("SKREEEE!");
// → The killer rabbit says 'SKREEEE!'


// Class notation
// So JavaScript classes are constructor functions with a prototype property. That
// is how they work, and until 2015, that was how you had to write them. These
// days, we have a less awkward notation.
class Rabbit {
    constructor(type) {
        this.type = type;
    }
    speak(line) {
        console.log(`The ${this.type} rabbit says '${line}'`);
    }
}
let killerRabbit = new Rabbit("killer");
let blackRabbit = new Rabbit("black");
// The class keyword starts a class declaration, which allows us to define a
// constructor and a set of methods all in a single place. Any number of methods
// may be written inside the declaration’s braces. The one named constructor
// the earlier class declaration is equivalent to the constructor
// definition from the previous section. It just looks nicer.