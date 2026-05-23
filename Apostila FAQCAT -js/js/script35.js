alert('Qual o maior numero')

let numeroUm = parseInt(prompt('DIGITE O PRIMEIRO NUMERO'))
let numeroDois = parseInt(prompt('DIGITE O SEGUNDO NUMERO'))
let numeroTres = parseInt(prompt('DIGITE O TERCEIRO NUMERO'))

if (numeroUm > numeroDois && numeroUm > numeroTres){
    alert(numeroUm + ' É O MAIOR DELES')
}
else if(numeroDois > numeroUm && numeroDois > numeroTres){
    alert(numeroDois + ' É O MAIOR DELES')
}
else{
    alert(numeroTres + ' É O MAIOR DELES')
}
