// Exemplos

// Exercício 0A
function soma() {
  // escreva seu código aqui
  const num1 = prompt('Digite o primeiro número')
  const num2 = prompt('Digite o segundo número')

  console.log(Number(num1) + Number(num2))
}

// Exercício 0B
function imprimeMensagem() {
  // escreva seu código aqui
  const mensagem = prompt('Digite sua mensagem')

  console.log(mensagem)
}

// ---------------------------------------------------
// Exercícios

// Exercício 1
function calculaAreaRetangulo() {
  // escreva seu código aqui
  let altRetangulo = Number(prompt("Qual a altura do retângulo?"))
  let largRetangulo = Number(prompt("Qual a largura do retângulo?"))

  let calcArea = altRetangulo * largRetangulo
  console.log(calcArea)
}

// Exercício 2
function imprimeIdade() {
  // escreva seu código aqui
  let anoAtual = Number(prompt("Em que ano estamos?"))
  let anoNascimento = Number(prompt("Qual seu ano de nascimento?"))

  let calcIdade = anoAtual - anoNascimento
  console.log(calcIdade)
}

// Exercício 3
function calculaIMC() {
  // escreva seu código aqui
  let peso = Number(prompt("Quantos kg você pesa?"))
  let altura = Number(prompt("Qual é a sua altura?"))

  let calcIMC = peso / (altura * altura)
  console.log(calcIMC)
}

// Exercício 4
function imprimeInformacoesUsuario() {
  // escreva seu código aqui
  let nomeUsuario = prompt("Qual seu nome?")
  let idadeUsuario = prompt("Qual sua idade?")
  let emailUsuario = prompt("Qual seu e-mail?")

  console.log(`Meu nome é ${nomeUsuario}, tenho ${idadeUsuario} anos, e o meu email é ${emailUsuario}.`)
}

// Exercício 5
function imprimeTresCoresFavoritas() {
  // escreva seu código aqui
  const cor1 = prompt("Qual a cor que você mais gosta?")
  const cor2 = prompt("Qual a segunda cor que você mais gosta?")
  const cor3 = prompt("Qual a terceira cor que mais gosta?")

  array = [cor1, cor2, cor3]
  console.log(array)
}

// Exercício 6
function retornaStringEmMaiuscula() {
  // escreva seu código aqui
  const palavra = prompt("Escreva uma palavra")

  console.log(palavra.toUpperCase())
}

// Exercício 7
function calculaIngressosEspetaculo() {
  // escreva seu código aqui
  let custoEspetaculo = Number(prompt("Qual foi o custo total do espetáculo?"))
  let custoIngresso = Number(prompt("Qual o valor do ingresso?"))

  let calcIngressos = custoEspetaculo / custoIngresso
  console.log(calcIngressos)
}

// Exercício 8
function checaStringsMesmoTamanho() {
  // escreva seu código aqui
  const palavra1 = prompt("Escreva uma palavra")
  const palavra2 = prompt("Escreva outra palavra")

  const checaTamanho = palavra1.length === palavra2.length
  console.log(checaTamanho)
}

// Exercício 9
function checaIgualdadeDesconsiderandoCase() {
  // escreva seu código aqui
  const mensagem1 = prompt("Escreva uma palavra")
  const mensagem2 = prompt("Escreva outra palavra")

  console.log(mensagem1.toUpperCase() == mensagem2.toUpperCase())
}

// Exercício 10
function checaRenovacaoRG() {
  // escreva seu código aqui
  let anoAt = Number(prompt("Em que ano estamos?"))
  let anoNasc = Number(prompt("Em que ano você nasceu?"))
  let anoRG = Number(prompt("Em que ano foi emitido seu RG?"))

  const idade = anoAt - anoNasc
  const emissao = anoAt - anoRG

  const emissao5 = idade<=20 && emissao>=5
  const emissao10 = idade>=21 && idade<=50 && emissao>=10
  const emissao15 = idade>=51 && emissao>=15

  console.log(emissao5 || emissao10 || emissao15)  
}

// Exercício 11
function checaAnoBissexto() {
  // escreva seu código aqui
  const ano = Number(prompt("Em que ano estamos?"))

  const checaBissexto = (ano % 400 === 0) || (ano % 4 == 0 && ano % 100 != 0)
  console.log(checaBissexto)
}

// Exercício 12
function checaValidadeInscricaoLabenu() {
  // escreva seu código aqui
  const mais18 = prompt("É maior de 18 anos?") == "sim"
  const ensMedio = prompt("Possui ensino médio completo?") == "sim"
  const disp = prompt("Possui disponibilidade nos horários de aula?") == "sim"

  console.log(mais18&&ensMedio&&disp)  
}