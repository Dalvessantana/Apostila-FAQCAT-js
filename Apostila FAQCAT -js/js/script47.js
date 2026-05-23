alert('Leitura de notas')

let nota1 = parseFloat(prompt("DIGITE A PRIMEIRA NOTA: "))
let nota2 = parseFloat(prompt("DIGITE A SEGUNDA NOTA: "))
let opcional = parseFloat(prompt("DIGITE A NOTA OPCIONAL (OU -1 SE NÃO FEZ): "))

// Se fez a opcional, verifica se vale a pena substituir
if (opcional !== -1) {
    if (nota1 < nota2 && opcional > nota1) {
        nota1 = opcional
    } else if (nota2 < nota1 && opcional > nota2) {
        nota2 = opcional
    }
}


let media = (nota1 + nota2) / 2


if (media >= 6.0) {
    alert("--MÉDIA--:  " + media + " --APROVADO--")
} else if (media < 3.0) {
    alert("--MÉDIA--:  " + media + " --REPROVADO--")
} else {
    alert("--MÉDIA--:  " + media + " --EXAME--")
}