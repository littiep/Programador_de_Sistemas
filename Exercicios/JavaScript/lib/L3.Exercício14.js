function primo(num) {
    if (num <= 0) {
        return false
    }
    if (num === 2 || num === 7 ) {
        return true
    }
    if (num % 2 === 0 || num % 3 === 0 || num % 5 === 0 || num % 7 === 0 || num % 11 === 0 )
    return false
else {
    return true
}
}

console.log(primo(7))
console.log(primo(10))
console.log(primo(13))
console.log(primo(0))
console.log(primo(1))
console.log(primo(2))
console.log(primo(3015))
console.log(primo(707))
console.log(primo(143))
