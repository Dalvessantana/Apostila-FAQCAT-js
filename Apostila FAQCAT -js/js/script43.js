alert('Leitura de idades')

let homemUm = parseInt(prompt('DIGITE A IDADE PRIMEIRO HOMEM: '))
let homemDois = parseInt(prompt('DIGITE A IDADE DO SEGUNDO HOMEM: '))
let mulherUm = parseInt(prompt('DIGITE A IDADE DA PRIMEIRA MULHER: '))
let mulherDois = parseInt(prompt('DIGITE A IDADE DA SEGUNDA MULHER: '))


let homemMaisVelho, homemMaisNovo

if (homemUm > homemDois) {
    homemMaisVelho = homemUm
    homemMaisNovo = homemDois
}
else {
    homemMaisVelho = homemDois
    homemMaisNovo = homemUm
}


let mulherMaisVelho, mulherMaisNovo

if (mulherUm > mulherDois) {
    mulherMaisVelho = mulherUm
    mulherMaisNovo = mulherDois
}
else {
    mulherMaisVelho = mulherDois
    mulherMaisNovo = mulherUm
}

let soma = homemMaisVelho + mulherMaisNovo
let produto =  homemMaisNovo * mulherMaisVelho

alert('A SOMA DO HOMEM MAIS VELHO COM A MULHER MAIS NOVA É: ' + soma)
alert('O PRODUTO DO HOMEM MAIS NOVO COM A MULHER MAIS VELHA É: ' + produto)