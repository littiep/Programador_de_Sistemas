const array1 = [1, 2, 4, 5, 7, 8, 10, 11]



var x = 0
const medias = []
for (let i = 0; i < array1.length;i++) {
    medias.unshift(array1[i] + array1[i + 1])
    x++
}
console.log(medias.length)
