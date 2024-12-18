var input = require('fs').readFileSync('./input.txt', 'utf8');
var lines = input.trim().split('\n');

var res = lines.map(Number).reduce((_acc,x) => x * 4, 0)

console.log(res)