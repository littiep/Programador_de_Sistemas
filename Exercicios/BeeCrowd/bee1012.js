var input = require('fs').readFileSync('./input.txt', 'utf8');
// console.log(input)
var lines = input.split(' ');
// console.log(lines)

// Escreva um programa que leia três valores com ponto flutuante de dupla precisão: A, B e C. Em seguida, calcule e mostre:
// a) a área do triângulo retângulo que tem A por base e C por altura.
// b) a área do círculo de raio C. (pi = 3.14159)
// c) a área do trapézio que tem A e B por bases e C por altura.
// d) a área do quadrado que tem lado B.
// e) a área do retângulo que tem lados A e B.

var A = Number(lines[0])
var B = Number(lines[1])
var C = Number(lines[2])




var triangulo = (A * C) / 2
var circulo =  3.14159 * (C ** 2)
var trap = ((A + B) * C) / 2
var quad = B ** 2
var retan = A * B

console.log(`TRIANGULO: ${triangulo.toFixed(3)}`)
console.log(`CIRCULO: ${circulo.toFixed(3)}`)
console.log(`TRAPEZIO: ${trap.toFixed(3)}`)
console.log(`QUADRADO: ${quad.toFixed(3)}`)
console.log(`RETANGULO: ${retan.toFixed(3)}`)




// TRIANGULO: 7.800
// CIRCULO: 84.949
// TRAPEZIO: 18.200
// QUADRADO: 16.000
// RETANGULO: 12.000

