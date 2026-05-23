alert('Leitura de angulos e definição de trinagulo')

let angulo1 = parseFloat(prompt("DIGITE O PRIMEIRO ANGULO DE UM TRIANGULO: "))
let angulo2 = parseFloat(prompt("DIGITE O SEGUNDO ANGULO DE UM TRIANGULO: "))
let angulo3 = parseFloat(prompt("DIGITE O TERÇEIRO ANGULO DE UM TRIANGULO: "))
let triangulo = angulo1 + angulo2 + angulo3

if (triangulo == 90) {
    alert('--TRIANGULO RETANGULO-- ESSE É O VALOR DO SEU ANGULO ' + triangulo + 'º GRAUS')
}
else if (triangulo > 90) {
    alert('--TRIANGULO OBTUSÃNGULO-- ESSE É O VALOR DO SEU ANGULO ' + triangulo + 'º GRAUS')
}
else {
    alert('--TRIANGULO ACUTÃNGULO-- ESSE É O VALOR DO SEU ANGULO ' + triangulo + 'º GRAUS')
}
