var input = require('fs').readFileSync('./input.txt', 'utf8');
var x = Number(input.trim());



for (var m = 1; m <= 10; m++) {
    var p = x * m
    console.log(`${m} x ${x} = ${p}`)
}