// function maiorNumero(num1, num2, num3) {
//     var maior = num1 
    
//      if (num2 > maior) {
//         maior = num2
//      }
//      if (num3 > maior) {
//         maior = num3
//      }

//      return maior
 
// }
// console.log(maiorNumero(3, 7, 5))
// console.log(maiorNumero(-1, -5, -3))
// console.log(maiorNumero(8, 2, 10))


function menorNumero(num1, num2, num3) {

    if (num2 > num1) num1 = num2
    
    if (num3 > num1) num1 = num3
    
    return num1

}
console.log(menorNumero(3, 7, 5))
console.log(menorNumero(-1, -5, -3))
console.log(menorNumero(8, 2, 10))
