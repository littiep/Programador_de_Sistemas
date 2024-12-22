// const { lutimes } = require('fs');

var input = require('fs').readFileSync('./input.txt', 'utf8');
// console.log(input)
var lines = input.trim().split('\n');

var tex = lines.map(Number).filter((z) => z % 2 != 0).reduce(
    (acc, c) => acc + c, 0
)
console.log(tex)