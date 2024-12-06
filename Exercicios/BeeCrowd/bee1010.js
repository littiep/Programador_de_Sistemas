var lines = input.split('\n');

// var a = (' ', '\n')
var lines = input.split('\n');
// console.log(lines)

var peca1 = lines[0].split(' ');
var peca2 = lines[1].split(' ');
// console.log(lines2)
// console.log(lines3)


var nump1 = Number(peca1[1])
var valp1 = Number(peca1[2])

var preco1 = nump1 * valp1

var nump2 = Number(peca2[1])
var valp2 = Number(peca2[2])

var preco2 = nump2 * valp2


var r = preco1 + preco2

console.log(`VALOR A PAGAR: R$ ${r.toFixed(2)}`)
// console.log(`${resultado} eh o maior` )
