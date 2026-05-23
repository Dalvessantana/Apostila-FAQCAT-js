alert('Resultado do jogo')

let timeUm = prompt('DIGITE O NOME DO PRIMEIRO TIME: ')
let timeDois = prompt('DIGITE O NOME DO SEGUNDO TIME: ')
let golsTimeUm = prompt('QUANTOS GOLS O ' + timeUm + ' MARCOU? ')
let golsTimeDois = prompt('QUANTOS GOLS O ' + timeDois + ' MARCOU? ')

if(golsTimeUm > golsTimeDois){
    alert('O ' +  timeUm + ' VENCEU')
}
else if(golsTimeUm == golsTimeDois){
    alert('EMPATE')
}
else{
    alert('O ' + timeDois + ' VENCEU')
}