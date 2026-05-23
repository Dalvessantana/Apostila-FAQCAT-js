alert("Media aritimetrica")

let primeiraNota = parseInt(prompt("DIGITE A PRIMEIRA NOTA DO SEU ALUNO: "))
let segundaNota = parseInt(prompt("DIGITE A SEGUNDA NOTA DO SEU ALUNO: "))

let calculo = (primeiraNota + segundaNota) / 2 
if (calculo < 6){
    alert("REPROVADO, SUA NOTA FOI: " + calculo )
}
else if (calculo >= 6){
    alert ("APROVADO, SUA NOTA FOI: " + calculo )
}