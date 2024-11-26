function bissexto(ano) {
   if (ano % 4 == 0 && ano % 100 != 0 || (ano % 400 == 0)) {
      return true
   }
   return false
}

console.log(bissexto(2020))
console.log(bissexto(2024))
console.log(bissexto(1999))
console.log(bissexto(2014))
console.log(bissexto(2025))
console.log(bissexto(1900))
console.log(bissexto(2000))
console.log(bissexto(2100))
console.log(bissexto(1600))
console.log(bissexto(1400))
console.log(bissexto(1500))