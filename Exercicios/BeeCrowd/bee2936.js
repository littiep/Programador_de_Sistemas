var input = require('fs').readFileSync('./input.txt', 'utf8');
var lines = input.trim().split('\n');

const [curu, boi, boto, mapi, lara] = lines.map(Number)

// console.log(curu, boi, boto, mapi, lara)

res = curu * 300 + boi * 1500 + boto * 600 + mapi * 1000 + lara * 150 + 225
console.log(res)

// boi1 = boi * 1500
// boto1 = boto * 600
// mapi1 = mapi * 1000
// lara1 = lara *  150