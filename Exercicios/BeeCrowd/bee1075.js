var input = require('fs').readFileSync('./input.txt', 'utf8');
var x = Number(input.trim())



for (i = 0; i < 10000; i++) {
    if (i % x === 2) {
        console.log(i)
    }
}
