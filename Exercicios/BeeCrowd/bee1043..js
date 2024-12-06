const { trace } = require('console');

var input = require('fs').readFileSync('./input.txt', 'utf8');
// console.log(input)
var lines = input.split(' ');
// console.log(lines)
var a = Number(lines[0])
var b = Number(lines[1])
var c = Number(lines[2])

if ((b + c) > a) {
    var trg = (a * c) / 2
    console.log(`Perimetro = ${trg.toFixed(1)}`)
} else {
    trap = ((a + b) * c) / 2
    console.log(`Area = ${trap.toFixed(1)}`)
}   