var input = require('fs').readFileSync('./input.txt', 'utf8');
// console.log(input)
var lines = input.split('\n');
// console.log(lines)var 

var x = Number(lines[0])
var y = Number(lines[1])


// var tempo = x / 60
var percorrido = x * y
var comb = percorrido / 12


console.log(comb.toFixed(3))