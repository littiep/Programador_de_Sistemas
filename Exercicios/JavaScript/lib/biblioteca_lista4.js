import { soma } from "./biblioteca_lista2.js"



export function somarLista(arr) {
    let res = arr.map(Number).reduce(soma, 0)
    return res
}



export function mediaLista(arr1) {
    let media = arr1.reduce(soma, 0)
        media = media / arr1.length
    return media
    }
