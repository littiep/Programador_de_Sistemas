var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var nome = lines[0]
var salario = Number(lines[1])
var vendas = Number(lines[2])

var porcentagem = (15 * vendas) / 100

var resultado = salario + porcentagem


console.log(`TOTAL = R$ ${resultado.toFixed(2)}`)