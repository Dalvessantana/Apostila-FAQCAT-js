alert('Leitura de notas - Média do semestre')

let nota1 = parseFloat(prompt("Digite a primeira nota: "))
let nota2 = parseFloat(prompt("Digite a segunda nota: "))

let conta = (nota1 + nota2) / 2
if (conta < 6){
    alert('--MEDIA--  ' + conta )
}
else{
    alert('--MEDIA--  ' + conta + ' PARABENS! VOCÊ FOI APROVADO')
}