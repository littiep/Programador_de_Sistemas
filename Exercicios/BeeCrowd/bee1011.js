var input = require('fs').readFileSync('./input.txt', 'utf8');
// console.log(input)
var lines = input.split('\n');
// console.log(lines)
var r = Number(lines[0])
var res = (4.0/3) * 3.14159 * (r ** 3)

console.log(`VOLUME = ${res.toFixed(3)}`)