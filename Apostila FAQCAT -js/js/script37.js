alert('Ordem crescente dos numeros')

let a = parseInt(prompt('Digite o primeiro valor'))
let b = parseInt(prompt('Digite o segundo valor'))
let c = parseInt(prompt('Digite o terceiro valor'))

if (a < b && b < c) {
    alert(a + ' ' + b + ' ' + c)
}
else if (a < c && c < b) {
    alert(a + ' ' + c + ' ' + b)
}
else if (b < a && a < c) {
    alert(b + ' ' + a + ' ' + c)
}
else if (b < c && c < a) {
    alert(b + ' ' + c + ' ' + a)
}
else if (c < a && a < b) {
    alert(c + ' ' + a + ' ' + b)
}
else {
    alert(c + ' ' + b + ' ' + a)
}