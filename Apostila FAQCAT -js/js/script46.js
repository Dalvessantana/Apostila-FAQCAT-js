alert('Origem do produto')

let codigo = parseInt(prompt('DIGITE O CODIGO DE ORIGEM DO PRODUTO: '))

if (codigo === 1) {
    alert('Região: Sul')
} else if (codigo === 2) {
    alert('Região: Norte')
} else if (codigo === 3) {
    alert('Região: Leste')
} else if (codigo === 4) {
    alert('Região: Oeste')
} else if (codigo === 5 || codigo === 6) {
    alert('Região: Nordeste')
} else if (codigo === 7 || codigo === 8 || codigo === 9) {
    alert('Região: Sudeste')
} else if (codigo === 10) {
    alert('Região: Centro-Oeste')
} else if (codigo === 11) {
    alert('Região: Noroeste')
} else {
    alert('Produto Importado')
}