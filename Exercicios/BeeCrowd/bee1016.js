var input = require('fs').readFileSync('./input.txt', 'utf8');
// console.log(input)
var lines = input.split('\n');
// console.log(lines)

var x = Number(lines[0])

console.log(`${x * 2} minutos`)



