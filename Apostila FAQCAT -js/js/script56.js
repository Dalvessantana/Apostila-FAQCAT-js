alert('Ordem decrescente')

let a = parseInt(prompt("DIGITE O PRIMEIRO VALOR: "))
let b = parseInt(prompt("DIGITE O SEGUNDO VALOR: "))
let c = parseInt(prompt("DIGITE O TERCEIRO VALOR: "))

if (a > b && a > c) {
    if (b > c) {
        alert("ORDEM DECRESCENTE: " + a + ", " + b + ", " + c)
    } else {
        alert("ORDEM DECRESCENTE: " + a + ", " + c + ", " + b)
    }
} else if (b > a && b > c) {
    if (a > c) {
        alert("ORDEM DECRESCENTE: " + b + ", " + a + ", " + c)
    } else {
        alert("ORDEM DECRESCENTE: " + b + ", " + c + ", " + a)
    }
} else {
    if (a > b) {
        alert("ORDEM DECRESCENTE: " + c + ", " + a + ", " + b)
    } else {
        alert("ORDEM DECRESCENTE: " + c + ", " + b + ", " + a)
    }
}