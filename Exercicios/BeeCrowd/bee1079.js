var input = require('fs').readFileSync('./input.txt', 'utf8');
// console.log(input)
var lines = input.trim().split('\n');

var ent = lines.split(' ')
var ent2 = lines.map(Number)

console.log(ent)
for(i = 1; i <= lines[0]; i++){
    var k = i++
    let l = k++
    var media = (lines[i] + lines[k] + lines[l]) / lines[0]
}
console.log(media)