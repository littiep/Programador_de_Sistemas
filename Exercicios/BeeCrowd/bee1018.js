var input = require('fs').readFileSync('./input.txt', 'utf8');
// console.log(input)
var lines = input.split('\n');
// console.log(lines)var 

var n = Number(lines[0])

console.log(n)

var nota100 = Math.floor(n/100)
n= n % 100
var nota50 = Math.floor(n/50)
n = n% 50
var nota20 =Math.floor(n/20)
n = n% 20
var nota10 =Math.floor(n/10)
n = n% 10
var nota5 =Math.floor(n/5)
n = n% 5
var nota2 = Math.floor(n/2)
n = n % 2
var nota1 =Math.floor(n/1)
n = n % 1

console.log(`${nota100} nota(s) de R$ 100,00\n${nota50} nota(s) de R$ 50,00\n${nota20} nota(s) de R$ 20,00\n${nota10} nota(s) de R$ 10,00\n${nota5} nota(s) de R$ 5,00\n${nota2} nota(s) de R$ 2,00\n${nota1} nota(s) de R$ 1,00`)