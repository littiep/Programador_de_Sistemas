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

import { somarLista } from "../../lib/biblioteca_lista4.js"

console.log(somarLista(123))
console.log(somarLista(456789))
console.log(somarLista(8423416542984721))

