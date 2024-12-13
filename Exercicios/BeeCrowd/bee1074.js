var input = require('fs').readFileSync('./input.txt', 'utf8');
var lines = input.trim().split('\n');



for (i = 0; i < 10000; i++) {
    if (i % x === 2) {
        console.log(i)
    }
}
