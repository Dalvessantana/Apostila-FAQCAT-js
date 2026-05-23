alert('Leitura de lados dos triangulos')

let a = parseInt(prompt('Digite o lado A'))
let b = parseInt(prompt('Digite o lado B'))
let c = parseInt(prompt('Digite o lado C'))

if (a < b + c && b < a + c && c < a + b) {
    alert('FORMA UM TRIANGULO')
}
else {
    alert('NAO FORMA UM TRIANGULO')
}