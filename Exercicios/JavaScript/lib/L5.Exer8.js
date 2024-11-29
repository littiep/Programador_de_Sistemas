function separarFrase(texto, separador) {
    var listaDeFrase = texto.split(separador)
    console.log(listaDeFrase)
    // return texto.split(separador)
}
// ("8. extraia o dia, mês e ano de uma data:")
console.log("\n----------------------------------------------------")
console.log("Extrair o dia, mes e ano de uma data:\n")

separarFrase("15/08/2024", "/")

// ("9. extraia horas, minutos e segundos de um horário: