alert('Soma dos dois maiores')

let numeroUm = parseInt(prompt('DIGITE O PRIMEIRO NUMERO'))
let numeroDois = parseInt(prompt('DIGITE O SEGUNDO NUMERO'))
let numeroTres = parseInt(prompt('DIGITE O TERCEIRO NUMERO'))
let soma = numeroUm + numeroDois + numeroTres


if (numeroUm < numeroDois && numeroUm < numeroTres){
    alert('A SOMA DOS MAIORES É: ' + (soma - numeroUm) )
}
else if(numeroDois < numeroUm && numeroDois < numeroTres){
    alert('A SOMA DOS MAIORES É ' + (soma - numeroDois))
}
else{
    alert('A SOMA DOS MAIORES É ' + (soma - numeroTres))
}
