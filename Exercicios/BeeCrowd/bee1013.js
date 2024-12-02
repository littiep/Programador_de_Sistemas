var input = require('fs').readFileSync('./input.txt', 'utf8');
// console.log(input)
var lines = input.split(' ');
// console.log(lines)

var a = (lines[0])
var b = (lines[1])
var c = (lines[2])
// console.log(a, b,c)
var resultado = Math.max(a, b, c)

console.log(`${resultado} eh o maior` )
