function somarArr(arr) {


    var som = 0
    var array1 = arr.toString().split('')
    for (let i = 0; i < array1.length; i++) {
        som += Number(array1[i])

    }
    return som
}



console.log(somarArr(123))

