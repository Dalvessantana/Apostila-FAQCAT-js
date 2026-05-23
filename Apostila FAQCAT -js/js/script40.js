alert('Leitura de dois valores')

let valorUm = parseInt(prompt('DIGITE O PRIMEIRO VALOR: '))
let valorDois = parseInt(prompt('DIGITE O SEGUNDO VALOR: '))

if(valorUm > valorDois){
    alert('PRIMEIRO É MAIOR')
}
else if (valorUm == valorDois){
    alert('NUMEROS IGUAIS')
}
else{
    alert('SEGUNDO É MAIOR')
}