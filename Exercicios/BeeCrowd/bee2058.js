var input = require('fs').readFileSync('./input.txt', 'utf8');
var lines = input.trim().split('\n');

var x = lines.map(Number).reduce((acc, c) => c - 2, 0)

console.log(x)