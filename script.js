//Exercício 2
let = nome = document.getElementById("nome")
let resposta = document.getElementById("resposta")

function Clicar()
{
    resposta.innerHTML ="Olá, " + nome.value + ", tudo bem?"
}

//Exercício 3
let = centimetros = document.getElementById("centimetros")
let metros = document.getElementById("metros")

function Converter()
{
    metros.innerHTML = centimetros.value / 100 + " m"
}

//Exercício 4
let numero = document.getElementById("inteiro")
let antecessor = document.getElementById("antecessor")
let sucessor = document.getElementById("sucessor")

function VerRespostas()
{
    antecessor.innerHTML = parseFloat(numero.value) - 1
    sucessor.innerHTML = parseFloat(numero.value) + 1
}

//Exercício 5
let n1 = document.getElementById("n1")
let n2 = document.getElementById("n2")
let descobrir = document.getElementById("descobrir")

function lerNumeros()
{
    if(parseFloat(n1.value) > parseFloat(n2.value))
        {
            descobrir.innerHTML = parseFloat(n1.value) + " é maior"
        }
    else
        {
            descobrir.innerHTML = parseFloat(n2.value) + " é maior"
        }
}

//Exercício 6
let salario = document.getElementById("salario");
let aumento = document.getElementById("aumento")

function total()
{
    if(salario.value <= 1250)
        {
            aumento.innerHTML = "Aumento de " + parseFloat(salario.value * 15) / 100 + " reais";
        }
        else
        {
            aumento.innerHTML = "Aumento de " + parseFloat(salario.value * 10) / 100 + " reais"
        }
}

//Exercício 7
console.log("exercício 7")
a = 1
while (a <= 100){
        console.log(a)
        a++
}

//Execício 8
console.log("exercicio 8")
b = 0
while (b <= 50){
        console.log(b)
        b = b + 5
}
//Exercício 9
console.log("exercício 9")
c = 100
while (c >= 0){
        console.log(c)
        c = c - 10
}