alert("Percentual de reajuste salarial")

var salarioMensalAtual = parseFloat(prompt("Digite seu salario mensal atual "))

var percentualReajuste = parseFloat(prompt("Digite o percentual de reajuste "))

var aumentoReal = (salarioMensalAtual * percentualReajuste / 100)

var salarioReajustado = (salarioMensalAtual + aumentoReal)

alert("Seu aumento foi de: " + aumentoReal + " e seu salario reajustado é de: " + "R$" + salarioReajustado)