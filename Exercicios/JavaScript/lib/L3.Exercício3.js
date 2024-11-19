function positivo(num) {
     if (num > 0) {
        return "Positivo"
    }
    else if (num < 0) {
        return "Negativo"
    }
    else if (num == 0){
        return "Zero"
    }
}

console.log(positivo(5))
console.log(positivo(-3))
console.log(positivo(0))
console.log(positivo(1110))
console.log(positivo(-987654321))