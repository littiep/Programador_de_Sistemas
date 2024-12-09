// const array1 = [1, 2, 3, 4, 5]




function somarPares(arr) {
    const pares1 = []
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0) {
            pares1.unshift(arr[i])

        }
    }

console.log(pares1)

    let soma = 0
    for (let i = 0; i < pares1.length; i++) {
        soma += pares1[i]
    }
    return soma
}



console.log(somarPares([1, 2, 3, 4, 5]))



