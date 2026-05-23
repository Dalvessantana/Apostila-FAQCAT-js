alert('Veriicação de usuario')

let tentativa = prompt('DIGITE O CÓDIGO DO USUARIO PARA VALIDAÇÃO')
if (tentativa == 1234) {

    let senha = prompt('DIGITE A SENHA')
    if(senha == 9999){
        alert('ACESSO PERMITIDO')
        alert('OLÁ, SEJA BEM VINDO')
    }
    else{
        alert('USUARIO INVALIDO')
    }
}
else {
    alert('USUARIO INVALIDO')
}


