var input = require('fs').readFileSync('./input.txt', 'utf8');
// console.log(input)
var lines = input.split('\n');
// console.log(lines)

// Calcule o consumo médio de um automóvel sendo fornecidos a distância total percorrida (em Km) e o total de combustível gasto (em litros).
var x = Number(lines[0])
var y = Number(lines[1])

var resultado = x / y
console.log(`${resultado.toFixed(3)} km/l`)