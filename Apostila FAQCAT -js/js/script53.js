alert('Leitura de lados')

let lados = parseInt(prompt('DIGITE QUANTOS LADOS (3/4/5) OUTRO NUMERO SERA CONSIDERADO INVÁLIDO'))

switch (lados) {
    case 3: 
        let tamanho = parseFloat(prompt('DIGITE A MEDIDA EM CM DO LADOS'))
        let perimetro = tamanho * 3
        alert('--TRIANGULO-- O PERÍMETRO É: ' + perimetro + ' CM²')
        break
    

    case 4: 
        let tamanho2 = parseFloat(prompt('DIGITE A MEDIDA EM CM DO LADOS'))
        let area = tamanho2 * tamanho2
        alert('--QUADRADO-- A ÁREA É: ' + area + ' CM²')
        break
    

    case 5:
        alert('--PÉNTAGONO--')
        break

    default:
        alert('--VALOR INVÁLIDO--')
}

