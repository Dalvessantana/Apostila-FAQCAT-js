// PROGRAMA COMPLETO PARA CALCULAR MÉDIA DE APROVEITAMENTO

let n1 = parseFloat(prompt("DIGITE A PRIMEIRA NOTA: "))
let n2 = parseFloat(prompt("DIGITE A SEGUNDA NOTA: "))
let n3 = parseFloat(prompt("DIGITE A TERCEIRA NOTA: "))

// CÁLCULO AUTOMÁTICO DA MÉDIA DOS EXERCÍCIOS
let mediaEx = (n1 + n2 + n3) / 3

// CÁLCULO DA MÉDIA DE APROVEITAMENTO
let mediaAproveitamento = (n1 + (n2 * 2) + (n3 * 3) + mediaEx) / 7

// DEFINIÇÃO DO CONCEITO
let conceito = ""

if (mediaAproveitamento >= 9.0) {
    conceito = "A"
} else if (mediaAproveitamento >= 7.5) {
    conceito = "B"
} else if (mediaAproveitamento >= 6.0) {
    conceito = "C"
} else {
    conceito = "D"
}

// RESULTADO FINAL
alert("MÉDIA DE EXERCÍCIOS: " + mediaEx +
      "\nMÉDIA DE APROVEITAMENTO: " + mediaAproveitamento +
      "\nCONCEITO: " + conceito)