alert("RedbullRacing")

var comprimentoPista = parseInt(prompt("QUAL O COMPRIMENTO DA PISTA EM METROS?"))

var comprimentoKm = comprimentoPista / 1000

var numeroVoltas = parseInt(prompt("QUAL O NUMERO TOTAL DE VOLTAS?"))

var numeroReabastecimento = parseInt(prompt("QUANTOS ABASTECIMENTO DESEJA FAZER"))

var trechos = numeroReabastecimento + 1

var voltasPorTrecho = numeroVoltas / trechos

var consumoCombustivel = parseInt(prompt("QUAL O CONSUMO DE LITROS POR KM DO SEU CARRO? "))

var distancia = voltasPorTrecho * comprimentoKm

var litroMinimo = distancia / consumoCombustivel

prompt("O LITRO MINIMO É: " + litroMinimo)

