function parseINI(string) {
    // Start with an object to hold the top-level fields
    let result = {};
    let section = result;
    string.split(/\r?\n/).forEach(line => {
        let match;
        if (match = line.match(/^(\w+)=(.*)$/)) {
            section[match[1]] = match[2];
        } else if (match = line.match(/^\[(.*)\]$/)) {
            section = result[match[1]] = {};
        } else if (!/^\s*(;.*)?$/.test(line)) {
            throw new Error("Line '" + line + "' is not valid.");
        }
    });
    return result;
}
console.log(parseINI(`
    name=Vasilis
    [address]
    city=Tessaloniki`));
    // → {name: "Vasilis", address: {city: "Tessaloniki"}}

// The code goes over the file’s lines and builds up an object. Properties at the
// top are stored directly into that object, whereas properties found in sections are
// stored in a separate section object. The section binding points at the object
// for the current section.
// There are two kinds of significant lines—section headers or property lines.
// When a line is a regular property, it is stored in the current section. When it
// is a section header, a new section object is created, and section is set to point
// at it.

// Note the recurring use of ^ and $ to make sure the expression matches the
// whole line, not just part of it. Leaving these out results in code that mostly
// works but behaves strangely for some input, which can be a difficult bug to
// track down.
// The pattern if (match = string.match(...)) is similar to the trick of using
// an assignment as the condition for while. You often aren’t sure that your call
// to match will succeed, so you can access the resulting object only inside an
// if statement that tests for this. To not break the pleasant chain of else if
// forms, we assign the result of the match to a binding and immediately use that
// assignment as the test for the if statement.
// If a line is not a section header or a property, the function checks whether it
// is a comment or an empty line using the expression /^\s*(;.*)?$/. Do you see
// how it works? The part between the parentheses will match comments, and
// the ? makes sure it also matches lines containing only whitespace. When a line
// doesn’t match any of the expected forms, the function throws an exception.