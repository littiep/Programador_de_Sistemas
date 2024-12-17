function separarFrase(texto, separador) {
    var listaDeFrase = texto.split(separador)
    console.log(listaDeFrase)
    // return texto.split(separador)
}
// 5. separe um caminho de diretório:
console.log("\n----------------------------------------------------")
console.log("5. Separe um caminho de diretorio\n")


separarFrase("/usr/local/bin", "/")
// separarFrase("/home/user/documents", "/")
// separarFrase("/var/www/html", "/")
