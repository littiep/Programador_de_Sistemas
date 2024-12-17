

// export function somarArr(arr) {
//     return arr.toString().split('').map(Number).reduce(
//         (acc, cur) => acc + cur,
//         0
//     )
// }
export function soma(x, y) {
    return Number(x) + Number(y)
}



export function mediaLista(arr) {
    const soma = arr.reduce(
        (acumulador, valorAtual) => acumulador + valorAtual / arr.length, 
        0)
    return parseInt(soma)
    }
