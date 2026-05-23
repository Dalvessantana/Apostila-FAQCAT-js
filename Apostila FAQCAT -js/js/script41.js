alert('Teste de mesa, tabela')

let x = parseFloat(prompt('DIGITE O VALOR DE X: '))
let y = parseFloat(prompt('DIGITE O VALOR DE Y:'))
let z = (x*y) + 5
if (z <= 0 ){
   let resposta = 'A'
   alert(z + '  ' + resposta)
}
else if (z <= 100){
    let resposta = 'B'
    alert(z + '  ' + resposta)
}
else{
    let resposta = 'C'
    alert(z + '  ' + resposta)
}
