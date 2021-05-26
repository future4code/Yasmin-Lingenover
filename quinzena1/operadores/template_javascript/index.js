// EXERCÍCIO 1

/*
const bool1 = true
const bool2 = false
const bool3 = !bool2

let resultado = bool1 && bool2
console.log("a. ", resultado)  // vai dar falso

resultado = bool1 && bool2 && bool3 
console.log("b. ", resultado)   // vai dar falso

resultado = !resultado && (bool1 || bool2) 
console.log("c. ", resultado)   // vai dar falso

console.log("d. ", typeof resultado)   // typeof boolean
*/


// EXERCÍCIO 2

/*
Seu colega se aproxima de você falando que o código dele não funciona como devia.
Vamos ajudá-lo: consegue perceber algum problema? O que será impresso no console?

let primeiroNumero = prompt("Digite um numero!")
let segundoNumero = prompt("Digite outro numero!")

const soma = primeiroNumero + segundoNumero

console.log(soma) 
*/
// Os números não serão somados, irão aparecer um ao lado do outro pois serão lidos como string.


//EXERCÍCIO 3

/*
Para o exercício anterior, sugira ao seu colega uma solução para que o valor 
impresso no console seja, de fato, a soma dos dois números.
*/
// Será necessário converter as variáveis para número:
/*
let primeiroNumero = Number(prompt("Digite um numero!"))
let segundoNumero = Number(prompt("Digite outro numero!"))

const soma = primeiroNumero + segundoNumero

console.log(soma)
*/



//EXERCÍCIO 1 DE ESCRITA DE CÓDIGO

let idadeUsuario = Number(prompt("Qual é a sua idade?"))
console.log(idadeUsuario)

let idadeAmigo = Number(prompt("Qual é a idade de seu/sua melhor amigo(a)?"))
console.log(idadeAmigo)

let idadeMaior = idadeUsuario >= idadeAmigo
console.log("Sua idade é maior do que a do seu melhor amigo?", idadeMaior)

let diferencaIdade = idadeUsuario - idadeAmigo
console.log("A diferença de idade entre vocês, é de:", diferencaIdade, "anos.")


// EXERCÍCIO 2

let numeroPar = Number(prompt("Escreva uma número par"))
let restoDivisao = Number(numeroPar % 2)
console.log("O resto da divisão é:" , restoDivisao)

// O padrão é que todo número par dividido por 2 terá resto 0

// Se for colocado um número ímpar para ser divido por 2, o resto será 1



// EXERCÍCIO 3

let idadeAnos = Number(prompt("Quantos anos você tem?"))

let idadeMeses = idadeAnos * 12
console.log("Sua idade em meses é:", idadeMeses)

let idadeDias = idadeAnos * 365
console.log("Sua idade em dias é:", idadeDias)

let idadeHoras = idadeAnos * (365*24)
console.log("Sua idade em horas é:", idadeHoras)


// EXERCÍCIO 4 

let primeiroNumero = Number(prompt("Informe um número"))
let segundoNumero = Number(prompt("Informe mais um número"))

let primeiroMaior = primeiroNumero > segundoNumero
console.log("O primeiro número é maior que o segundo?", primeiroMaior)

let primeiroIgual = primeiroNumero === segundoNumero
console.log("O primeiro número é igual ao segundo?", primeiroIgual)

let primeiroDivisao = Number(primeiroNumero % segundoNumero)
let resto1 = primeiroDivisao === 0
console.log("O primeiro número é divisível pelo segundo?", resto1)

let segundoDivisao = Number(segundoNumero % primeiroNumero)
let resto2 = segundoDivisao === 0
console.log("O segundo número é divisível pelo primeiro?", resto2)

