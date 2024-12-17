import { soma } from "./biblioteca_lista2.js"



export function somarArr(arr) {
    let res = arr.map(Number).reduce(soma, 0)
    return res
}



export function mediaLista(arr1) {
    let media = arr1.map(Number).reduce(soma / arr1.length, 0)
    return media
    }
