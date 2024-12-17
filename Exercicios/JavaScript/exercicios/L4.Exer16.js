

// function inverter(tes) {
// var a = tes
// var s = a.split('')
// var r = s.reverse()
// var res = ''

// for (i = 0; i < r.length; i++) {
//     res += r[i]
// }

// if (res === a) {
//     return true
// }
// else {
//     return false
// }

// }


// console.log(inverter("hello"))

function inverter(a) {
    var r = a.split('').reverse().join('')
    return r === a
}


console.log(inverter("racecar"))
