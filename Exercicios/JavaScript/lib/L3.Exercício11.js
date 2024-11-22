function fatorial(n) {
    var x = 1, fator = 1
    while (x <= n ) {
        // fator = x * n
        fator *= x
        x++
        
    }
    return fator
}

console.log(fatorial(5))
console.log(fatorial(0))
console.log(fatorial(3))
console.log(fatorial(12))