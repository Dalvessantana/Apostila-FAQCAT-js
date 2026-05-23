alert("Preço final de um carro")

var custoDeFabrica = parseFloat(prompt("Digite o custo de fabrica do seu carro"))

var distribuidor = (custoDeFabrica *28/100)

var impostos = (custoDeFabrica *45/100)

var custoFinalConsumidor = (custoDeFabrica + distribuidor +impostos)

alert("O valor final do seu carro com todos os custos é " + "R$" + custoFinalConsumidor)