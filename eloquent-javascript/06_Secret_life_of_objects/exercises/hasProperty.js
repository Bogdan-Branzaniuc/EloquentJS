let map = { one: true, two: true }


console.log(map.hasOwnProperty('one'))

//solution
console.log(Object.prototype.hasOwnProperty.call(map, "one"));
