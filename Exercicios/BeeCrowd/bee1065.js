var input = require('fs').readFileSync('./input.txt', 'utf8');
// console.log(input)
var lines = input.split('\n');

var e = Number(lines[4])  //7
var d = Number(lines[3]) // -5
var c = Number(lines[2]) //6
var b = Number(lines[1]) // -4
var a = Number(lines[0])  //12
var x = 0

if (a % 2 === 0) {
    x++
} if (b % 2 === 0) {
    x++
} if (c % 2 === 0) {
    x++
} if (d % 2 === 0) {
    x++
} if (e % 2 === 0) {
    x++
}
console.log(x)


// let lines = [12, -4, 6, -5, 7]; 
// let x = 0;

// for (let i = 0; i < lines.length; i++) {
//     if (lines[i] % 2 === 0) {
//         x++;
//     }
// }

// console.log(`${x} valores pares`);