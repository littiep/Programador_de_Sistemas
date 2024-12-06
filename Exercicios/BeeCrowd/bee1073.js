var input = require('fs').readFileSync('./input.txt', 'utf8');
// console.log(input)
var lines = input.split(' ');

var a = Number(lines[0])


for (var i = 2; i < a; i = i + 2) {
    var x = 2
    var qdd = i ** x
    x = qdd
}