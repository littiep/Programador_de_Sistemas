// const { lutimes } = require('fs');

var input = require('fs').readFileSync('./input.txt', 'utf8');
// console.log(input)
var lines = input.split('\n');

var x = Number(lines[0])

for (let i = 0; i < x;i++) {
    if( i % 2 !== 0) {
        console.log(i)
    }
}
