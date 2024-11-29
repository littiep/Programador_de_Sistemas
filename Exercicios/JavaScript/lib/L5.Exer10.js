function separarFrase(texto, separador) {
    var listaDeFrase = texto.split(separador)
    console.log(listaDeFrase)
    // return texto.split(separador)
}
//10.separe as linhas de um texto com múltiplas linhas:
console.log("\n----------------------------------------------------")
console.log("10.separe as linhas de um texto com múltiplas linhas:\n")


separarFrase("Primeira linha\nSegunda linha\nTerceira linha", "\n")
separarFrase("Lorem ipsum dolor sit amet,\nconsectetur adipiscingelit,\nsed do eiusmod tempor incididunt ut labore.", "\n")
separarFrase("Linha única sem quebras", "\n")
separarFrase(`Primeira linha de um texto.
Segunda linha usando template strings.
Terceira linha com mais detalhes.`, "\n")
separarFrase(`
 Lorem ipsum dolor sit amet,
 consectetur adipiscing elit.
 Ut enim ad minim veniam.`
, "\n")
separarFrase(`
Texto com linhas múltiplas e
uso de templates strings
para separação.
`
, "\n")


