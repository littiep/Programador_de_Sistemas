
    export const verificarPar = (a) => a % 2 === 0

    export function imparOuPar(x) {
        return verificarPar ? "par" : "impar"
    }
    
    // export function menorNumero(num1, num2, num3) {
    //     var menor = num1 
    
    //      if (num2 < menor) menor = num2
         
    //      if (num3 < menor) menor = num3
         
    //    return menor
       //   return menor
     
    // }
    export function menorNumero(num1, num2, num3) {
        var menor = num1 
    
         if (num2 < menor) menor = num2
         
         if (num3 < menor) menor = num3
         
       return menor
    }

    export function maiorNumero(num1, num2, num3) {

        if (num2 > num1) num1 = num2
        
        if (num3 > num1) num1 = num3
        
        return num1
    
    }