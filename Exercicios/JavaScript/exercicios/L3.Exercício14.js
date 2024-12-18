// function primo(np) {
//     if (np < 2) return false;

//     // if (np == 2 ) { 
//     //     return true
//     // }
// for (var i = 2; i < np; i++) {
//     if (np % i == 0 ) return false;
// }
//     return true
// }

import { primo } from "../lib/biblioteca_lista3.js"

console.log(primo(7)) //true
console.log(primo(10)) //false
console.log(primo(13)) //true
console.log(primo(0)) //false 
console.log(primo(1)) //false 
console.log(primo(2)) //true
console.log("------------")
console.log(primo(327)) // false 
console.log(primo(847)) // false
console.log(primo(1573)) //false 
console.log(primo(31)) //true 
console.log(primo(-3)) // false
console.log(primo(-31)) //false