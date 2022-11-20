const ordinal = require("ordinal");
const { days, months } = require("date-names");
exports.formatDate = function (date, format) {
    return format.replace(/YYYY|M(MMM)?|Do?|dddd/g, tag => {
        if (tag == "YYYY") return date.getFullYear();
        if (tag == "M") return date.getMonth();
        if (tag == "MMMM") return months[date.getMonth()];
        if (tag == "D") return date.getDate();
        if (tag == "Do") return ordinal(date.getDate());
        if (tag == "dddd") return days[date.getDay()];
    });
};

// The interface of ordinal is a single function, whereas date-names exports an
// object containing multiple things—days and months are arrays of names. 
// Destructuring is very convenient when creating bindings for imported interfaces.
// The module adds its interface function to exports so that modules that
// depend on it get access to it. We could use the module like this:

const { formatDate } = require("./format-date");
console.log(formatDate(new Date(2017, 9, 13),
    "dddd the Do"));
// → Friday the 13th


// We can define require, in its most minimal form, like this:
require.cache = Object.create(null);

function require(name) {
    if (!(name in require.cache)) {
        let code = readFile(name);
        let module = { exports: {} };
        require.cache[name] = module;
        let wrapper = Function("require, exports, module", code);
        wrapper(require, module.exports, module);
    }
    return require.cache[name].exports;
}


// A quirk of the CommonJS modules is that, though the module
// system will create an empty interface object for you (bound to exports), you
// can replace that with any value by overwriting module.exports. This is done
// by many modules to export a single value instead of an interface object.


//The way the string given to require is translated to an actual filename or
// web address differs in different systems. When it starts with "./" or "../",
// it is generally interpreted as relative to the current module’s filename. So "./
// format-date" would be the file named format-date.js in the same directory.
// When the name isn’t relative, Node.js will look for an installed package by
// that name. In the example code in this chapter, we’ll interpret such names as
// referring to NPM packages. We’ll go into more detail on how to install and use
// NPM modules in Chapter 20.
// Now, instead of writing our own INI file parser, we can use one from NPM.
const { parse } = require("ini");
console.log(parse("x = 10\ny = 20"));
// → {x: "10", y: "20"}