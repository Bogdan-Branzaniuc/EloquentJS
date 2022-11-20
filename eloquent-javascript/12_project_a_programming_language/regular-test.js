let message = '#sasa\nlalilaaaa'
let match = message.match(/^(\s|#.*)*/)

console.log(message.slice(match[0].length))
