function contarAteN(n) {
    var x = 0, soma = 0
    while (x <= n) {
        soma += x
        x++
    }
    return soma
}

console.log(contarAteN(5))
console.log(contarAteN(10))
console.log(contarAteN(1))
console.log(contarAteN(64))