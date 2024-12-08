

function inverter(tes) {
var a = tes
var s = a.split('')
var r = s.reverse()
var res = ''

for (i = 0; i < r.length; i++) {
    res += r[i]

}
return res
}


console.log(inverter("hello"))