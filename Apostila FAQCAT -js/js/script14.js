alert("Salario mais suas comissões")

var salarioFixo = parseFloat(prompt("Qual seu salario mensal fixo? "))

var carrosVendidos = parseInt(prompt("Quantos carros vc vendeu? "))
var comissaoFixa = (carrosVendidos * 500)

var valorDasVendasDosCarros = parseFloat(prompt("Qual foi o valor vendido? "))
var porcentagemDasVendas = (valorDasVendasDosCarros * 5 /100)

var salarioFinal = (salarioFixo + comissaoFixa + porcentagemDasVendas)
alert("Seu salario final foi : " + salarioFinal)