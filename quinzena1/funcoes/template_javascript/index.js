// EXERCÍCIO DE INTERPRETAÇAÃO DE CÓDIGOS

// EXERCÍCIO 1
// a: Será impresso no console os números: 10 e 50
// b: Se tirar o console.log não vai aparecer nada pois dará erro

// EXERCÍCIO 2
/* a: Essa função vai pegar o texto do usuário, deixar tudo em letra minúscula e vai verificar se tem a palavra "cenoura",
   irá retornar com true ou false dependendo da frase que o usuário inserir no prompt */
/* b: Saídas: i. true
              ii. true
              iii. false */


// EXERCÍCIOS DE ESCRITA DE CÓDIGO

// EXERCÍCIO 1
// a:

function imprimirMeusDados() {
    const meusDados = console.log("Eu sou Yasmin, tenho 23 anos, moro em Pinhais e sou estudante na Labenu <3")
    return meusDados
}

imprimirMeusDados()

// b:

const nome = prompt("Qual seu nome?")
const idade = Number(prompt("Qual sua idade?"))
const cidade = prompt("Em qual cidade vive?")
const trabalho = prompt("Qual sua profissão?")

function imprimirDadosUsuario(nome, idade, cidade, trabalho) {
    
    const resultado = console.log(`Eu sou ${nome}, tenho ${idade} anos, moro em ${cidade} e trabalho como ${trabalho}.`)
    return resultado
} 

imprimirDadosUsuario(nome, idade, cidade, trabalho)


// EXERCÍCIO 2
// a:
const num1 = Number(prompt("Escreva um número"))
const num2 = Number(prompt("Escreva mais um número"))


function somarNumeros(num1, num2) {
    const resultadoSoma = console.log(num1+num2)
    return resultadoSoma
}
somarNumeros(num1, num2)


// b: 
function checarMaiorOuIgual(num1, num2) {
    const resultadoMaiorOuIgual = console.log("O primeiro número é maior ou igual ao segundo?", num1 >= num2)
    return resultadoMaiorOuIgual
}
checarMaiorOuIgual(num1, num2)

// c: 
const num3 = Number(prompt("Escreva outro número"))

function checarNumPar(num3) {
    const resultadoPar = console.log("O número inserido é par?", (num3 % 2 === 0))
    return resultadoPar
}
checarNumPar(num3)

// d: 
const mensagem = prompt("Deixe aqui uma mensagem")

function imprimirMensagem(mensagem) {
    const resultadoMensagem = console.log("Sua mensagem em caixa alta fica: ", mensagem.toUpperCase(), ", e tem o tamanho de: ", mensagem.length, "caracteres.")
    return resultadoMensagem
}
imprimirMensagem(mensagem)


// EXERCÍCIO 3
const operador1 = Number(prompt("Digite um número"))
const operador2 = Number(prompt("Digite um número"))

function somarOperadores(operador1, operador2) {
    const somaOperandos = console.log("Soma:", (operador1 + operador2))
    return somaOperandos
}

function subtrairOperadores(operador1, operador2) {
    const subOperandos = console.log("Diferença:", (operador1 - operador2))
    return subOperandos
}

function multiplicarOperadores(operador1, operador2) {
    const multiplicaOperandos = console.log("Multiplicação:", (operador1 * operador2))
    return multiplicaOperandos
}

function dividirOperadores(operador1, operador2) {
    const divisaoOperandos = console.log("Divisão:", (operador1 / operador2))
    return divisaoOperandos
}

somarOperadores(operador1, operador2)

subtrairOperadores(operador1, operador2)

multiplicarOperadores(operador1, operador2)

dividirOperadores(operador1, operador2) 