var input = require('fs').readFileSync('./input.txt', 'utf8');
var lines = input.split('\n');

const [_c1, qtd1, valor1] = lines[0].split(" ").map(Number)
const [_c2, qtd2, valor2] = lines[1].split(" ").map(Number)
// console.log(c1, qtd1, valor1)
var r = qtd1 * valor1 + qtd2 * valor2;



console.log(`VALOR A PAGAR: R$ ${r.toFixed(2)}`)
// console.log(`${resultado} eh o maior` )
