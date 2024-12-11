function somarArr(arr) {


    const valorInicial = 0
    var array1 = arr.toString().split('')
    var soma = array1.reduce(
        (acc, cur) => acc + cur,
        valorInicial,
    )
    return soma
}



console.log(somarArr(123))
console.log(somarArr(456789))
console.log(somarArr(8423416542984721))

