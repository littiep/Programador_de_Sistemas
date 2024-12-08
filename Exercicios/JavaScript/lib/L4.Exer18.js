
function vogal(x) {
    var vogais = "aeiou".split('')
    let k = 0
    for (i = 0; i < x.length; i++) {
        if (x.includes(vogais[i])) {
            k++
        }
    }
    return k
}

console.log(vogal("hello"))