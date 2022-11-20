function repeat(n, action) {
    for (let i = 0; i < n; i++) {
        action(i);
    }
}

let labels = [];
repeat(5, y => labels.push(`Unit ${y + 1}`))

console.log(labels);
// → ["Unit 1", "Unit 2", "Unit 3", "Unit 4", "Unit 5"]

// When programming, we can’t rely on all the words we need to be waiting for
// us in the dictionary. Thus, we might fall into the pattern of the first recipe—
// work out the precise steps the computer has to perform, one by one, blind to
// the higher-level concepts that they express.
// It is a useful skill, in programming, to notice when you are working at too
// low a level of abstraction.