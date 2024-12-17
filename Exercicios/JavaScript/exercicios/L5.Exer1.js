function separarFrase(texto, separador) {
    var listaDeFrase = texto.split(separador)
    console.log(listaDeFrase)
    // return texto.split(separador)
}
// 1. separe uma frase em palavras:
console.log("1. Separar uma frase em palavras\n")

separarFrase("Oh brave new world that has such people in it.", " ")
// separarFrase("JavaScript é muito fácil!", " ")

// separe uma lista de nome
console.log("\n----------------------------------------------------")
console.log("2. Separar uma lista de nomes\n")

separarFrase("Eu gosto de programar", " ")
// separarFrase("João,Maria,José", ",")
// separarFrase("Ana Maria,Paulo Coelho,Carla", ",")

// 4. "Separe um texto usando um delimitador longo"
console.log("\n----------------------------------------------------")
console.log("3. Separar um texto usando um delimitador longo \n")

separarFrase("fulano@gmail.com;ciclano@yahoo.com;beltrano@outlook.com", ";")
// separarFrase("contato@empresa.com;suporte@site.com", ";")
// separarFrase("admin@fundacao.org;info@site.org", ";")

console.log("\n----------------------------------------------------")
console.log("4. Separe um texto usando um delimitador longo")

separarFrase("Nome -- Sobrenome -- Idade -- País", " -- ")
// separarFrase("Item 1 -- Item 2 -- Item 3 -- Item 4", " -- ")
// separarFrase("Rua A -- Bairro B -- Cidade C -- Estado D", " -- ")

// 5. separe um caminho de diretório:
console.log("\n----------------------------------------------------")
console.log("5. Separe um caminho de diretorio\n")


separarFrase("/usr/local/bin", "/")
// separarFrase("/home/user/documents", "/")
// separarFrase("/var/www/html", "/")

// ("6. separe uma frase em letras:")
console.log("\n----------------------------------------------------")
console.log("6. Separar uma frase em letras\n")

separarFrase("JavaScript", "")
// separarFrase("Eu gosto de programar", "")
// separarFrase("Olá, Mundo", "")

// ("7. separe um parágrafo em uma lista de frases:")
console.log("\n----------------------------------------------------")
console.log("7. Separar um paragrafo em uma lista de frases\n")

separarFrase("O sol está brilhando. O céu está azul. É um ótimo dia!", ". ")
// separarFrase("Programar é divertido. Pratique todos os dias.", ". ")
// separarFrase("Olá. Como vai você?", ". ")

console.log("\n----------------------------------------------------")
console.log("Extrair o dia, mes e ano de uma data:\n")
// ("8. extraia o dia, mês e ano de uma data:")

separarFrase("15/08/2024", "/")

// ("9. extraia horas, minutos e segundos de um horário:
console.log("\n----------------------------------------------------")
console.log("9. extraia horas, minutos e segundos de um horário:", ":")

separarFrase("14:35:20", ":")

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


