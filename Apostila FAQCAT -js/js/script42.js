alert('Calculo do desconto em combustivel')

let precoAlcool = 2.90
let precoGasolina = 3.30



let tipo = (prompt('QUAL O COMBUSTIVEL? (A-ÁLCOOL / G-GASOLINA)'))

switch (tipo) {
    case 'A':

        let alcoolLitro = parseFloat(prompt('QUANTOS LITROS DE ÁLCOOL? '))
        if (alcoolLitro <= 20) {
            let conta = alcoolLitro * precoAlcool
            let desconto = conta * 0.03
            let resultado = conta - desconto
            alert('A (ÁLCOOL) ' + 'R$ ' + resultado)
        }
        else {
            let conta = alcoolLitro * precoAlcool
            let desconto = conta * 0.05
            let resultado = conta - desconto
            alert('A (ÁLCOOL) ' + 'R$ ' + resultado)
        }
        break

    case 'G':

        let gasolinalLitro = parseFloat(prompt('QUANTOS LITROS DE GASOLINA? '))
        if (gasolinalLitro <= 20) {
            let conta = gasolinalLitro * precoGasolina
            let desconto = conta * 0.04
            let resultado = conta - desconto
            alert('G (GASOLINA) ' + 'R$ ' + resultado)
        }
        else {
            let conta = gasolinalLitro * precoGasolina
            let desconto = conta * 0.06
            let resultado = conta - desconto
            alert('G (GASOLINA) ' + 'R$ ' + resultado)
        }
        break
    default:
        alert('TIPO DE COMBUSTIVEL INVALIDO')

}

