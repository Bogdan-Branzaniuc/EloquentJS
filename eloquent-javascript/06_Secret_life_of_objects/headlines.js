//                                   Encapsulation
// interfaces: limited sets of functions or bindings that provide useful functionality at
//     a more abstract level, hiding their precise implementation.

//     Separating interface from implementation is a great idea.It is usually called
// encapsulation.

//                                      Methods

// Methods are nothing more than properties that hold function values. This is a
// simple method:
let rabbit = {};
rabbit.speak = function (line) {
    console.log(`The rabbit says '${line}'`);
};

rabbit.speak("I'm alive.");
// → The rabbit says 'I'm alive.'

function speak(line) {
    console.log(`The ${this.type} rabbit says '${line}'`);
}
let whiteRabbit = { type: "white", speak };
let redRabbit = { type: "red", speak }
let hungryRabbit = { type: "hungry", speak };

redRabbit.speak('I\'M freaking red')

whiteRabbit.speak("Oh my ears and whiskers, " +
    "how late it's getting!");
// → The white rabbit says 'Oh my ears and whiskers, how
// late it's getting!'
hungryRabbit.speak("I could use a carrot right now.");
// → The hungry rabbit says 'I could use a carrot right now.'

