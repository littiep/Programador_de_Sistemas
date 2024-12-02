var lines = input.split('\n');

// var a = (' ', '\n')
var lines = input.split('\n');
// console.log(lines)

var lines2 = lines[0].split(' ');
var lines3 = lines[1].split(' ');
// console.log(lines2)
// console.log(lines3)

var codp1 = Number(lines2[0])
var nump1 = Number(lines2[1])
var valp1 = Number(lines2[2])

var preco1 = nump1 * valp1

var codp2 = lines3[0]
var nump2 = Number(lines3[1])
var valp2 = Number(lines3[2])

var preco2 = nump2 * valp2
var r = preco1 + preco2

console.log(`VALOR A PAGAR: R$ ${r.toFixed(2)}`)
// console.log(`${resultado} eh o maior` )
