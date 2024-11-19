function sa(nota) {
    if (nota >= 90) {
        return "A"
     }
    else if (nota >= 80 && nota <= 89) {
        return "B"
    }
    else if (nota >= 70 && nota <= 79) {
        return "C"
    }
    else if (nota >= 60 && nota <= 69 ) {
        return "D"
    }
    else {
        return "F"
    }
}

console.log(sa(90))
console.log(sa(75))
console.log(sa(60))
console.log(sa(0))
console.log(sa(59))
console.log(sa(89))
console.log(sa(69))
console.log(sa(79))
console.log(sa(99))