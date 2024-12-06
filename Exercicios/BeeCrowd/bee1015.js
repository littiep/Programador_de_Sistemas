var input = require('fs').readFileSync('./input.txt', 'utf8');
// console.log(input)
var lines = input.split('\n');
// console.log(lines)

var ponto1 = lines[0].split(' ') 
var ponto2 = lines[1].split(' ') 

var x1 = ponto1[0]
var y1 = ponto1[1]

var x2 = ponto2[0]
var y2 = ponto2[1]


var res = Math.sqrt(((x2 - x1) ** 2) + ((y2 - y1)** 2))
console.log(res.toFixed(4))





