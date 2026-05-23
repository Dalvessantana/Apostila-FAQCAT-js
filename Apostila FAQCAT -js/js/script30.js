alert("Peso ideal, correção")

let nome = prompt("DIGITE SEU NOME:")
let altura = parseFloat(prompt("DIGITE SEU ALTURA"))
let sexo = prompt("DIGITE SEU SEXO (M OU F)")

if (sexo = "M") {
    pesoIdeal = (72.7 * altura) - 58
}
    else {
        pesoIdeal =(62.1 * altura) - 44.7
}

alert(nome + " SEU PESO IDEAL É " + pesoIdeal + " KG")