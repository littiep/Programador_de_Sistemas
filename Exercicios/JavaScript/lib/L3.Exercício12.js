// function imprimirTabuada(x) {
//     var m = 0, p = 0
//     while (m <= 10) {
//         p = x * m
//         console.log(`${x} x ${m} = ${p}`)
//         m++
//     }
// }


// imprimirTabuada(2)
// imprimirTabuada(10)

function tabuada(x) {
    for (var m = 0; m <= 10; m++) {
        var p = x * m
        console.log(`${x} x ${m} = ${p}`)
    }

    return console.log()

}
tabuada(2)
tabuada(10)