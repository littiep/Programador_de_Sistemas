const array1 = [1, 2, 3, 4, 5]



// function par(x) {
//     x % 2 === 0 
// }



// const pares = array1.filter((valor) => valor % 2 === 0).reduce(
//     (acc, num) => acc + num, 0
// )

// const pares = array1.filter((valor) => valor % 2 === 0)


import { somarLista } from "../../lib/biblioteca_lista4.js"
import { verificarPar } from "../../lib/biblioteca_lista3.js"


// console.log(somarArr(array1.filter((valor) => valor % 2 === 0)))
console.log(somarLista(array1.filter(verificarPar)))







