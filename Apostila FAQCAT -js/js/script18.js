alert("Numero de lâmpadas")

//var potenciaLampada = parseInt(prompt("Digite o valor de potencia de sua lampâda em watts")) 

var comodoLargura = parseInt(prompt("Digite aqui a largura do seu comodo para obter a area : "))
var comodoAltura = parseInt(prompt("Digite aqui a altura do seu comodo : para obter a area"))
var areaComodo = comodoLargura * comodoAltura
alert("A aréa do seu comodo é : " + areaComodo + "m2")

var potenciaWatts = parseInt(prompt("Digite aqui a potencia de sua lampâda em watts : "))

var potenciaMaxima = areaComodo * 18 //Aqui faço a conta de quantas lampadas de 18 watts precisaria de acordo com a area do comodo 

var calculoPotenciaNecessaria = potenciaMaxima / potenciaWatts

alert(calculoPotenciaNecessaria + "lâmpadas necessarias para iluminar seu comodo")