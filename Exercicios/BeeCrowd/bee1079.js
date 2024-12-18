var input = require('fs').readFileSync('./input.txt', 'utf8');
// console.log(input)
var lines = input.trim().map(Number).split('\n');

let n = lines[0]

for(let i = 1; i <= n; i++) {
    let [m1, m2, m3] = lines[i].split(' ')
    let media = (m1 * 2 + m2 * 3 + m3 * 5) / 10
    console.log(media.toFixed(1))
}

