function avaliar(media) {
    if (media >= 7 && media <= 10 ) {
        return "Aprovado"
    } 
    else if (media < 7 && media >= 0) {
        return "Reprovado"
    }
    else {    return "Nota invalida"
    }
}
console.log(avaliar(10))
console.log(avaliar(7.0))
console.log(avaliar(6.95))
console.log(avaliar(8.8))
console.log(avaliar(0))
console.log(avaliar(2.725))
console.log(avaliar(100))
console.log(avaliar(-5))