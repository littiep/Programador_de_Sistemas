// const { lutimes } = require('fs');

var input = require('fs').readFileSync('./input.txt', 'utf8');
// console.log(input)
var lines = input.split('\n');

var pos = 0
var neg = 0
var par = 0
var impar = 0


for (let i = 0; i < lines.length; i++) {
    if (lines[i] > 0) {
        pos++
    } else if (lines[i] < 0) neg++
    if (lines[i] % 2 === 0) {
        par++
    } else impar++

}
console.log(`${par} valor(es) par(es)\n${impar} valor(es) impar(es)\n${pos} valor(es) positivo(s)\n${neg} valor(es) negativo(s)`)
