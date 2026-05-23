alert("Calculo cozinha")
var comprimentoCozinha = parseInt(prompt("Digite o comprimento da sua cozinha: "))
var larguraCozinha = parseInt(prompt("Digite a largura da sua cozinha: "))
var alturaCozinha = parseInt(prompt("Digite a altura da sua cozinha: "))
var area = 2 * (comprimentoCozinha * alturaCozinha) + 2 *  (larguraCozinha * alturaCozinha)
prompt("A area da sua cozinha é : " + area + " M2") 
var calculo = area / 1.5

alert("O total de caixas de azuleijo usadas na sua cozinha é: " + calculo)