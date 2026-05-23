alert("Porcentagem de votos")

var eleitores = parseInt(prompt("Qual a quantidade de eleitores do municipio? "))

var votosBracos = parseInt(prompt("Qaul a quantidade de votos brancos? "))

var votosNulos = parseInt(prompt("Qual a quantidade de votos nulos? "))

var votosValidos = parseInt(prompt("Qual a quantidade de votos validos? "))

var porcentagemVotosBrancos = ( votosBracos / eleitores *100)
var porcentagemVotosNulos = (votosNulos / eleitores *100)
var porcentagemVotosValidos = (votosValidos / eleitores *100)

alert("A quantidade de votos brancos é: " + votosBracos + " e sua porcentagem: " + porcentagemVotosBrancos + "%")
alert("A quantidade de votos nulos é: " + votosNulos + " e sua porcentagem: " + porcentagemVotosNulos + "%")
alert("A quantidade de votos validos é: " + votosValidos + " e sua porcentagem: " + porcentagemVotosValidos + "%")