alert("Peso ideal ")

let nome = prompt("DIGITE SEU NOME:")
let altura = parseFloat(prompt("DIGITE SEU ALTURA"))
let sexo = prompt("DIGITE SEU SEXO (1-Maculino / 2-Feminino) (1 OU 2)")

if (sexo = "1") {
    pesoIdeal = (72.7 * altura) - 58
}
    else {
        pesoIdeal =(62.1 * altura) - 44.7
}

alert(nome + " SEU PESO IDEAL É " + pesoIdeal + " KG")