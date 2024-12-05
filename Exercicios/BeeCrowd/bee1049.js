var input = require('fs').readFileSync('./input.txt', 'utf8');
// console.log(input)
var lines = input.split('\n');
// console.log(lines)var 

var x = Number(lines[0])

if (x >= 0 && x <= 400) {
    res = x * 1.15
} else if (x > 400 && x <= 800) {
    res = x * 1.12
    rst = res - 400
} else if (x > 800 && x <= 1200) {
    res = x * 1.10
    rst = res - 800
} else if (x > 1200 && x <= 2000) {
    res = x * 1.07
    rst = res - 1200
} else if (x > 2000) {
    res = x * 1.04
    rst = res - 2000
}

