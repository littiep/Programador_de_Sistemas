export function tabuada(x) {
    for (var m = 0; m <= 10; m++) {
        var p = x * m
        console.log(`${x} x ${m} = ${p}`)
    }

    return console.log()

}

export function imprimirTabuada() {
    for (var n = 1; n <= 10; n++) {
            for (var k = 0; k <= 10; k++) {
                    console.log(`${n} x ${k} = ${n*k}`)
                }    
                console.log("\n===============\n")
            }
}



export function somarArr(arr) {
    return arr.toString().split('').map(Number).reduce(
        (acc, cur) => acc + cur,
        0
    )
}

export function tirarMedia(arr) {
    const soma = arr.reduce (
        (acumulador, valorAtual) => acumulador + valorAtual / arr.length, 
        0)
    return parseInt(soma)
    }

export default {tabuada, imprimirTabuada}