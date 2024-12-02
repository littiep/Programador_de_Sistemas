var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var numero = Number(lines[0])
var salario = Number(lines[1])
var horas = Number(lines[2])

var r = salario * horas.
console.log(`NUMBER = ${numero}\nSALARY = ${r}`)