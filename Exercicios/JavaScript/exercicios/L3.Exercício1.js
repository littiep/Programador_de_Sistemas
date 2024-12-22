// function avaliarMedia(media) {
//     if (media >= 7 && media <= 10 ) {
//         return "Aprovado"
//     } 
//     else if (media < 7 && media >= 0) {
//         return "Reprovado"
//     }
//     else {    return "Nota invalida"
//     }
// }
import { avaliarMedia } from "../lib/biblioteca_lista3.js"


console.log(avaliarMedia(10))
console.log(avaliarMedia(7.0))
console.log(avaliarMedia(6.95))
console.log(avaliarMedia(8.8))
console.log(avaliarMedia(0))
console.log(avaliarMedia(2.725))
console.log(avaliarMedia(100))
console.log(avaliarMedia(-5))