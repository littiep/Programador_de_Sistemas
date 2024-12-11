
// const valorInicial = 0
// function tirarMedia(arr) {
// const soma = arr.reduce (
//     (acumulador, valorAtual) => (acumulador + valorAtual) / arr.length ,0)
// return soma
const valorInicial = 0
function tirarMedia(arr) {
const soma = arr.reduce (
    (acumulador, valorAtual) => acumulador + valorAtual / arr.length ,0)
return parseInt(soma)

}

console.log(tirarMedia([1, 2, 4, 5, 7, 8, 10, 11]))
console.log(tirarMedia([10, 70, 30, 50]))
console.log(tirarMedia([29, 567, 38, 53, 503, 92, 67, 909, 203, 382, 28]))
console.log(tirarMedia([]))