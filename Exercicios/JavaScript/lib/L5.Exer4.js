function separarFrase(texto, separador) {
    var listaDeFrase = texto.split(separador)
    console.log(listaDeFrase)
    // return texto.split(separador)
}


console.log("\n----------------------------------------------------")
console.log("4. Separe um texto usando um delimitador longo")

separarFrase("Nome -- Sobrenome -- Idade -- País", " -- ")
// separarFrase("Item 1 -- Item 2 -- Item 3 -- Item 4", " -- ")
// separarFrase("Rua A -- Bairro B -- Cidade C -- Estado D", " -- ")

