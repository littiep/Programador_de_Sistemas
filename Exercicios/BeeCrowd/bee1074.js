var input = require('fs').readFileSync('./input.txt', 'utf8');
var lines = input.trim().split('\n');

var nums = lines.map(Number)
