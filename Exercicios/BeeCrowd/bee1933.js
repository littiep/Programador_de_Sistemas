var input = require('fs').readFileSync('./input.txt', 'utf8');
var lines = input.trim().split(' ');

// var x = Math.max(...lines.map(Number))


console.log(Math.max(...lines.map(Number)))