var input = require('fs').readFileSync('./input.txt', 'utf8');
// console.log(input)
var lines = input.split('\n');
// console.log(lines)var 


var num = Number(lines[0])

if (num >=0 && num <= 25) {
    console.log(`Intervalo [0,25]`)
} else if (num > 25 && num <= 50) { 
    console.log("Intervalo (25,50]")
} else if (num > 75 && num <= 100) {
    console.log("Intervalo (75,100]")
} else {console.log("Fora de intervalo")}