var input = require('fs').readFileSync('./input.txt', 'utf8');
// console.log(input)
var lines = input.split('\n');
// console.log(lines)var 

var n = Number(lines[0])

var hh = Math.floor(n/3600)
n= n % 3600
var mm = Math.floor(n/60)
n = n% 60
var ss=Math.floor(n/1)

console.log(`${hh}:${mm}:${ss}`)