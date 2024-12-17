function separarFrase(texto, separador) {
    var listaDeFrase = texto.split(separador)
    console.log(listaDeFrase)
    // return texto.split(separador)
}


// 4. "Separe um texto usando um delimitador longo"
console.log("\n----------------------------------------------------")
console.log("3. extraia os domínios de uma lista de e-mails: \n")

separarFrase("fulano@gmail.com;ciclano@yahoo.com;beltrano@outlook.com", ";")
// separarFrase("contato@empresa.com;suporte@site.com", ";")
// separarFrase("admin@fundacao.org;info@site.org", ";")
