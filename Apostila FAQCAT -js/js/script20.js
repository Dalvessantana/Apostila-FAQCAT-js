var kmInicio = parseInt(prompt("DIGITE COM QUANTOS KMS VC INICIOU O DIA?"))
var kmFim = parseInt(prompt("DIGITE COM QUANTOS KMS VC TERMINOU O DIA"))
var calculoKm = kmFim - kmInicio

prompt("VOCE RODOU O TOTAL DE: " + calculoKm + " KM")

var litrosGastos = parseInt(prompt("PARA RODAR O TOTAL DE " + calculoKm + " R$ QUANTOS LITROS SEU CARRO CONSUMIU"))

valorCombustivel = litrosGastos* 2.90

prompt("VOCÊ GASTOU " + valorCombustivel + " R$ EM COMBUSTIVEL")