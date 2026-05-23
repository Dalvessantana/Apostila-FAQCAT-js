
let inicio = parseInt(prompt("Digite a hora de início (0-23):"));
let fim = parseInt(prompt("Digite a hora de fim (0-23):"));

let duracao;

if (fim >= inicio) {
    // jogo terminou no mesmo dia
    duracao = fim - inicio;
} else {
    // jogo terminou no dia seguinte
    duracao = (24 - inicio) + fim;
}

alert("A duração do jogo foi de " + duracao + " horas.");

/*alert("Duração do xadrez")

let horaInicial = parseInt(prompt("DIGITE O HORARIO QUE O JOGO COMEÇOU"))

let horaFinal =  parseInt(prompt("DIGITE O HORARIO QUE O JOGO TERMINOU"))

let duracaoDia = 24

let horas = horaFinal - horaInicial

let horasJogadas = horas - duracaoDia

alert("A duração do jogo foi: " + horasJogadas + "h" )*/