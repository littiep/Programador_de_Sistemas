// const { lutimes } = require('fs');

var input = require('fs').readFileSync('./input.txt', 'utf8');
// console.log(input)
var lines = input.split('\n');

var n = Number(lines[0])
// var b = Number(lines[1])
// var c = Number(lines[2])
// var d = Number(lines[3])
// var e = Number(lines[4])
var k = 0
var l = 0

for (let i = 1; i < n + 1; i++) {
    if (Number(lines[i]) >= 10 && Number(lines[i]) <= 20) {
        k++
    } else {
        l++
    }
}
console.log(k + " in")
console.log(l + " out")