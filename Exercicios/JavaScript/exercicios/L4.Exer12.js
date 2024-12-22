// function somarArr(arr) {
//     var array1 = arr.toString().split('')
//     var soma = array1.reduce(
//         (acc, cur) => acc + cur,
//         0
//     )
//     return soma
// }
// function somarArr(arr) {
//     var res = arr.toString().split('').map(Number).reduce(
//         (acc, cur) => acc + cur,
//         0
//     )
//     return res
// }

import { somarArr } from "../lib/biblioteca_lista4.js"

console.log(somarArr(123))
console.log(somarArr(456789))
console.log(somarArr(8423416542984721))

