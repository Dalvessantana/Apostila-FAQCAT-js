alert('Leitura de lados e definição de trinagulo')

let lado1 = parseFloat(prompt("DIGITE O PRIMEIRO LADO: "))
let lado2 = parseFloat(prompt("DIGITE O SEGUNDO LADO: "))
let lado3 = parseFloat(prompt("DIGITE O TERÇEIRO LADO: "))


if (lado1 === lado2 && lado2 === lado3) {
    alert("TRIÂNGULO EQUILÁTERO")
    
} else if (lado1 === lado2 || lado1 === lado3 || lado2 === lado3) {
    alert("TRIÂNGULO ISÓSCELES")
} else {
    alert("TRIÂNGULO ESCALENO")
}