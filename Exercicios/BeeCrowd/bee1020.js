var input = require('fs').readFileSync('./input.txt', 'utf8');
// console.log(input)
var lines = input.split('\n');
// console.log(lines)var 

var n = Number(lines[0])


var yy = Math.floor(n/365)
n= n % 365
var mm = Math.floor(n/30)
n = n% 30
var dd =Math.floor(n/1)
n = n% 1


console.log(`${yy} ano(s)\n${mm} mes(es)\n${dd} dia(s)`)