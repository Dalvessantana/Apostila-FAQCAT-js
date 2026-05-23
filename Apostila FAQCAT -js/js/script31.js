alert("Salario mais vendas efetuadas")

let salarioFixo = parseFloat(prompt('DIGITE SEU SALARIO FIXO MENSAL:'))
let vendasEfetuadas = parseFloat(prompt('DIGITE O VALOR DE VENDAS EFETUADAS'))

if (vendasEfetuadas <= 1500) {
    comissaoTresPorCento = vendasEfetuadas * 0.03
    let resultado = salarioFixo + comissaoTresPorCento + vendasEfetuadas
    alert('SEU SALARIO FIXO COM AS VENDAS E COMISSÃO É: R$ ' + resultado)
}
else {
    comissaoCincoPorCento = vendasEfetuadas * 0.05
    resultadoDois = salarioFixo + vendasEfetuadas + comissaoCincoPorCento
    alert('SEU SALARIO FIXO COM AS VENDAS E COMISSÃO É: R$ ' + resultadoDois)

}
