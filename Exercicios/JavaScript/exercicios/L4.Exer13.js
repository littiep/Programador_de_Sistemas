// function maior(arr) {
//     Math.max(null, arr)
// }


// console.log(maior[1, 2, 3, 4, 5])

function maior(a) {
var max = Math.max(...a)
return max
}


console.log(maior([1, 2, 3, 4, 5]))
console.log(maior([-1, -2, -3, -4, -5]))
console.log(maior( [10, 20, 30, 40, -50]))

// var arr = [1, 2, 3];
// var max = Math.max(...arr);
// // max: 3
