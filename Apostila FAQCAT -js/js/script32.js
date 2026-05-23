alert('Leitura de saldo')

alert('O NUMERO DA SUA CONTA É: 3213 4242 5463 9750')

let saldoConta = parseFloat(prompt('DIGITE AQUI O SALDO DA CONTA: '))
let debito = parseFloat(prompt('DIGITE AQUI O DEBITO DA SUA CONTA: '))
let credito= parseFloat(prompt('DIGITE AQUI O VALOR DO CREDITO : '))

let saldo = saldoConta - debito + credito 


if (saldo >= 0) {
    alert('O SALDO DA SUA CONTA É POSITIVO, E VOCÊ TEM: R$' + saldo)

}
else{
    alert('O SALDO DA SUA CONTA É NEGATIVO: R$' + saldo )
}
