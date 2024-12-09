// const { lutimes } = require('fs');

var input = require('fs').readFileSync('./input.txt', 'utf8');
// console.log(input)
var lines = input.split('\n');

var x = 0

for (let i = 0; i < lines.length; i++) {
    if (lines[i] > 0) {
        x++
    }
}
console.log(x)