import { soma } from "./biblioteca_lista2.js"



export function somarArr(arr) {
    let res = arr.map(Number).reduce(soma, 0)
    return res
}
