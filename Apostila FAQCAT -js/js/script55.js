alert("OPERAÇÕES")

let valor1 = parseInt(prompt("DIGITE O PRIMEIRO VALOR INTEIRO: "))
let valor2 = parseInt(prompt("DIGITE O SEGUNDO VALOR INTEIRO: "))
let operacao = parseInt(prompt("DIGITE O CÓDIGO DA OPERAÇÃO: 1 = ADIÇÃO, 2 = SUBTRAÇÃO, 3 = DIVISÃO, 4 = MULTIPLICAÇÃO"))

switch (operacao) {
    case 1:
        alert("RESULTADO DA ADIÇÃO: " + (valor1 + valor2))
        break
    case 2:
        alert("RESULTADO DA SUBTRAÇÃO: " + (valor1 - valor2))
        break
    case 3:
        if (valor2 !== 0) {
            alert("RESULTADO DA DIVISÃO: " + (valor1 / valor2))
        } else {
            alert("ERRO: DIVISÃO POR ZERO NÃO É PERMITIDA")
        }
        break
    case 4:
        alert("RESULTADO DA MULTIPLICAÇÃO: " + (valor1 * valor2))
        break
    default:
        alert("CÓDIGO INVÁLIDO. DIGITE APENAS 1, 2, 3 OU 4.")
}
