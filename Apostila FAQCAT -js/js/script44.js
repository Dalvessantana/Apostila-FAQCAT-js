alert('Calcúlo de compras')

let fruta = prompt('QUAL É A FRUTA? DIGITE:(Morango / Maçã')
switch (fruta) {
    case 'Morango':

        let quantidadeMorango = parseInt(prompt('DIGITE O PESO EM KG DE MORANGOS:'))
        if (quantidadeMorango <= 5) {
            let conta = quantidadeMorango * 2.50
            alert('O VALOR DA COMPRA É: R$' + conta)
        }
        else {
            let conta = quantidadeMorango * 2.20
            alert('O VALOR DA COMPRA É: R$' + conta)
        }

    case 'Maçã':
        let quantidadeMaca = parseInt(prompt('DIGITE O PESO EM KG DE MAÇÃS:'))
        if (quantidadeMaca <= 5) {
            let conta = quantidadeMaca * 1.80
            alert('O VALOR DA COMPRA É: R$' + conta)

        }
        else {
            let conta = quantidadeMaca * 1.50
            alert('O VALOR DA COMPRA É: R$' + conta)

        }
}