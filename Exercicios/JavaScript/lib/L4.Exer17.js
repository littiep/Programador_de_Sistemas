
var abc = "abcdefghijklmnopqrstuvwxyz".split('')
// var x = "0123456789".split('')
function ssa(fras) {
    var frase = fras
for (i = 0; i < abc.length; i++) {
    if (frase.includes(abc[i])) {
        return false 
    } else {
        return true
    }
    }
}


console.log(ssa("abc123"))