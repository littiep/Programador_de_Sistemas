var input = require('fs').readFileSync('./input.txt', 'utf8');
var lines = input.split('\n');

var a = Number(lines[0])
var b = Number(lines[1])

console.log(`X = ${a + b}`)