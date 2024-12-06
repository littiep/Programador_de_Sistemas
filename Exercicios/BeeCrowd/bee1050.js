var input = require('fs').readFileSync('./input.txt', 'utf8');
// console.log(input)
var lines = input.split(' ');
 
var ddd = Number(lines[0])


var dddCidades = {
    61: 'Brasilia',
    71: 'Salvador',
    11: 'Sao paulo', 
    21: 'Rio de Janeiro',
    32: 'Juiz de Fora',
    19: 'Campinas',
    27: 'Vitoria',
    31: 'Belo Horizonte',
    }




    if (ddd === 61 || ddd === 71 || ddd === 11 || ddd === 21 || ddd === 32 || ddd === 19 || ddd === 27 || ddd === 31) {
        console.log(dddCidades[ddd])
    } else {console.log("DDD nao cadastrado")}
