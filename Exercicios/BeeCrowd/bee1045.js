var input = require('fs').readFileSync('./input.txt', 'utf8');
var lines = input.trim().split(' ');

let [a, b, c] = lines.map(Number).sort((x, y) => y - x);

if (a >= b + c) {
    console.log("NAO FORMA TRIANGULO");
} else if ((a * a) === (b * b + c * c)) {
    console.log("TRIANGULO RETANGULO");
} else if ((a * a) > (b * b + c * c)) {
    console.log("TRIANGULO OBTUSANGULO");
} else if ((a * a) < (b * b + c * c)) {
        console.log("TRIANGULO ACUTANGULO");
}

if (a === b && b === c) {
    console.log("TRIANGULO EQUILATERO");
} else if (a === b || a === c || b === c) {
   console.log("TRIANGULO ISOSCELES");
}

// Leia 3 valores de ponto flutuante A, B e C e ordene-os em ordem decrescente, de modo que o lado A representa o maior dos 3 lados. A seguir, determine o tipo de triângulo que estes três lados formam, com base nos seguintes casos, sempre escrevendo uma mensagem adequada:

// se A ≥ B+C, apresente a mensagem: NAO FORMA TRIANGULO
// se A2 = B2 + C2, apresente a mensagem: TRIANGULO RETANGULO
// se A2 > B2 + C2, apresente a mensagem: TRIANGULO OBTUSANGULO
// se A2 < B2 + C2, apresente a mensagem: TRIANGULO ACUTANGULO
// se os três lados forem iguais, apresente a mensagem: TRIANGULO EQUILATERO
// se apenas dois dos lados forem iguais, apresente a mensagem: TRIANGULO ISOSCELES
// Entrada