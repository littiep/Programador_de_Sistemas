// export function tabuada(x) {
//     for (var m = 0; m <= 10; m++) {
//         var p = x * m
//         console.log(`${x} x ${m} = ${p}`)
//     }

//     return console.log()

// }

// export function imprimirTabuada() {
//     for (var n = 1; n <= 10; n++) {
//             for (var k = 0; k <= 10; k++) {
//                     console.log(`${n} x ${k} = ${n*k}`)
//                 }    
//                 console.log("\n===============\n")
//             }
// }



0

    export function imparOuPar(x) {
        return x % 2 === 0 ? "par" : "impar"
    }
    
    export function menorNumero(num1, num2, num3) {
        var menor = num1 
    
         if (num2 < menor) menor = num2
         
         if (num3 < menor) menor = num3
         
       return menor
       //   return menor
     
    }
    export function maiorNumero(num1, num2, num3) {

        if (num2 > num1) num1 = num2
        
        if (num3 > num1) num1 = num3
        
        return num1
    
    }