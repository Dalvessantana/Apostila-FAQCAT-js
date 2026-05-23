alert('Quantidade media de estoque')

let produto = prompt('QUAL O PRODUTO?')
let estoqueQuantidadeAtual = parseFloat(prompt('DIGITE AQUI A QUANTIDADE ATUAL DO ESTOQUE DO SEU PRODUTO'))
let quantidadeMaxima = parseFloat(prompt('DIGITE A QUANTIDADE MAXIMA DO ESTOQUE DO SEU PRODUTO'))
let quantidadeMinima = parseFloat(prompt('DIGITE A QUANTIDADE MINIMA DO ESTOQUE DO SEU PRODUTO'))
let quantidadeMedia = ((quantidadeMaxima + quantidadeMinima) /2 )

if (estoqueQuantidadeAtual >= quantidadeMedia){
    alert('NÃO EFETUAR COMPRA')
}
else{
    alert('EFETUAR COMPRA')
}