function separarFrase(texto, separador) {
    var listaDeFrase = texto.split(separador)
    console.log(listaDeFrase)
    // return texto.split(separador)
}

// separe uma lista de nome
console.log("\n----------------------------------------------------")
console.log("2. Separar uma lista de nomes\n")

separarFrase("Eu gosto de programar", " ")
// separarFrase("João,Maria,José", ",")
// separarFrase("Ana Maria,Paulo Coelho,Carla", ",")
