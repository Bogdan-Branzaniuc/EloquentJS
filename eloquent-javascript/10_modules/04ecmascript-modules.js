//CommonJS modules work quite well and, in combination with NPM, have
//allowed the JavaScript community to start sharing code on a large scale.
// But they remain a bit of a duct-tape hack. The notation is slightly awkward—
// the things you add to exports are not available in the local scope, for example.
// And because require is a normal function call taking any kind of argument, not
// just a string literal, it can be hard to determine the dependencies of a module
// without running its code.
// This is why the JavaScript standard from 2015 introduces its own, 
// different module system. It is usually called ES modules, where ES stands for
// ECMAScript. The main concepts of dependencies and interfaces remain the
// same, but the details differ. For one thing, the notation is now integrated into
// the language. Instead of calling a function to access a dependency, you use a
// special import keyword.

import ordinal from "ordinal";
import { days, months } from "date-names";
export function formatDate(date, format) { /* ... */ }

export default ["Winter", "Spring", "Summer", "Autumn"];
//It is possible to rename imported bindings using the word as.
import { days as dayNames } from "date-names";
console.log(dayNames.length);
// → 7