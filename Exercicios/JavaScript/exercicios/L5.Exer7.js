function separarFrase(texto, separador) {
    var listaDeFrase = texto.split(separador)
    console.log(listaDeFrase)
    // return texto.split(separador)
}
// ("7. separe um parágrafo em uma lista de frases:")
console.log("\n----------------------------------------------------")
console.log("7. Separar um paragrafo em uma lista de frases\n")

separarFrase("O sol está brilhando. O céu está azul. É um ótimo dia!", ". ")
// separarFrase("Programar é divertido. Pratique todos os dias.", ". ")
// separarFrase("Olá. Como vai você?", ". ")

