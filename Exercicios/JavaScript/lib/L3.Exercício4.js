function menorNumero(num1, num2, num3) {
    var menor = num1 

     if (num2 < menor) menor = num2
     
     if (num3 < menor) menor = num3
     
   return menor
   //   return menor
 
}
console.log(menorNumero(3, 7, 5))
console.log(menorNumero(-1, -5, -3))
console.log(menorNumero(8, 2, 10))