function primo(num) {
    if (num % num == 0 && num % 1 == 0 && (num > 1) && num % 2 !=0 && num % 3 !=0 && num % 5 != 0 ) {
        return true
    }
    return false
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
