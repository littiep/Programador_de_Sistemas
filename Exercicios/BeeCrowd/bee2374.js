var input = require('fs').readFileSync('./input.txt', 'utf8');
var lines = input.trim().split('\n');

var pressao = lines.map(Number)

// console.log(pressao)
res = pressao[0] - pressao[1]

console.log(res)