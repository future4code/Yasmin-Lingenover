// 1
/*
let a = 10
let b = 10

console.log(b)

b = 5
console.log(a, b)
*/
// Vai aparecer: console.log(10, 10, 5)


// 2
/*
let a = 10
let b = 20
let c
c = a
b = c
a = b

console.log(a, b, c)
*/
// Vai aparecer: console.log(10, 10, 10)


// 3
/*
let p = prompt("Quantas horas você trabalha por dia?")
let t = prompt("Quanto você recebe por dia?")
alert(`Voce recebe ${t/p} por hora`)
*/

// let horasDia = prompt("Quantas horas você trabalha por dia?")
// let valorDia = prompt("Quanto você recebe por dia?")
// alert(`Você recebe ${valorDia/horasDia} por hora`)

// EXERCÍCIO 1
let nome 
let idade 

//Foi impresso undefined pois não atribuí nenhum valor para as variáveis

nome = prompt("Qual é o seu nome?")
idade = Number(prompt("Qual é a sua idade?"))
 
console.log(typeof(nome), typeof(idade))

console.log("Olá", nome, "você tem", idade, "anos!")


//EXERCÍCIO 2

let roupaPreta = prompt("Você usou roupa preta hoje?")
let almoco = prompt("Você almoçou hoje?")
let agua = prompt("Você já bebeu água?")

let roupaPretaR = "Sim"
let almocoR = "Sim"
let aguaR = "Não"

console.log("Você usou roupa preta hoje?", roupaPretaR)
console.log("Você almoçou hoje?", almocoR)
console.log("Você já bebeu água?", aguaR)


//EXERCÍCIO 3

let a = 15
let b = 12
let c

c = a
a = b
b = c

console.log("O novo valor de a é:", a)
console.log("O novo valor de b é:", b)


