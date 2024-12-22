// const array1 = [1, 2, 3,]
// const array2 =  [4, 5, 6]
// const array3 = array1.concat(array2)
// const array4 =  ["a", "b"]
// const array5 =  ["c", "d"]
// const array6 =  array4.concat(array5)
// const array7 =  []
// const array8 =  [1, 2, 3]
// const array9 =  array7.concat(array8)
// const array10 =  [1, 2, 3,]
// const array11 =  []
// const array12 =  array10.concat(array11)
// const array13 =  []
// const array14 =  []
// const array15 =  array13.concat(array14)

function concatenarArr(arr1, arr2) {
    var res = arr1.concat(arr2)
    return res
}



console.log(concatenarArr([1, 2, 3], [4, 5, 6]))
console.log(concatenarArr(["a", "b"], ["c", "d"]))
console.log(concatenarArr([], [1, 2, 3]))
console.log(concatenarArr([1, 2, 3], []))
console.log(concatenarArr([], []))
// console.log(array6)
// console.log(array9)
// console.log(array12)
// console.log(array15)

// console.log(array3.shift())
// console.log(array3)
// console.log(array3.indexOf(30))