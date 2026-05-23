alert("Conversão de idade para dias")

var idade = parseInt(prompt("Digite dua idade: "))
var mes = parseInt(prompt("Digite o numero do mês do seu nascimento: "))
var dias = parseInt(prompt("Digite o dia do seu nascimento "))

var resultado = (idade * 365 + mes * 30 + dias)
 alert("Você está á " + resultado + " dias na terra!!!")