// const array1 = [1, 2, 3, 4, 5]
// let x = 1
// for (var i = 0;i > 5; i++) {
//     var valor = array1[i] + x 
//     x++

// }
// console.log(valor);

// var r = 0
// const array2 = [1, 2, 3, 4, 5] 
// for (let i = 0;i < array2.length; i++) {
//     r += array2[i]
// }

// console.log(r)
// function somarArr(arr) {
// const valorInicial = 0
// const soma = arr.reduce(
//     (acumulador, valorAtual) => acumulador + valorAtual,
//     valorInicial,
// );
// return soma 
// }
import { somarArr } from "../biblioteca_lista4.js"

console.log(somarArr([1, 2, 3, 4, 5]))