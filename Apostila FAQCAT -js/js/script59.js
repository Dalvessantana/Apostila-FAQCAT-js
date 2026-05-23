let produto = prompt("DIGITE O NOME DO PRODUTO: ")
let quantidade = parseInt(prompt("DIGITE A QUANTIDADE COMPRADA: "))
let preco = parseFloat(prompt("DIGITE O PREÇO UNITÁRIO: "))

let total = quantidade * preco
let desconto = 0

if (quantidade <= 5) {
    desconto = total * 0.02
} else if (quantidade <= 10) {
    desconto = total * 0.03
} else {
    desconto = total * 0.05
}

let totalPagar = total - desconto

alert("PRODUTO: " + produto +
    "\nTOTAL: R$ " + total +
    "\nDESCONTO: R$ " + desconto +
    "\nTOTAL A PAGAR: R$ " + totalPagar)