function anagrama(var1, var2) {
    var p = var1.split('').sort().join()
    var l = var2.split('').sort().join()
    return p === l 
}

console.log(anagrama("listen", "silent"))