// EXERCÍCIOS DE INTERPRETAÇÃO

//1.a: O código vai pegar o número que o usuário inseriu, dividir por 2 e se o resto for 0 irá passar no teste, caso contrário não passará.

//1.b: Vai imprimir que passou se for inserido um número par

//1.b: Não vai passar se o usuário escolher um número ímpar.


//2.a: O códio serve para informar o preço das frutas

//2.b: O preço da fruta Maçã é R$ 2.25



//3.a: A primeira linha está solicitando um número para o usuário e convertendo de string para number

//3.b: Se for 10 irá passar no teste.Se for -10, não tenho certeza

//3.c: No console.log não irá aparecer a mensagem pois a sua variável está dentro do if, e o console está fora



// EXERCÍCIOS DE ESCRITA    

// 1

const idadeUsuario = Number(prompt("Qual é sua idade?"))

if (idadeUsuario >= 18) {
    console.log("Você pode dirigir")
} else {
    console.log("Você ainda não pode dirigir")
}

// 2

const turno = prompt('Em qual turno você estuda? Digite "M", "V" ou "N"')


if (turno="m") {
    console.log("Bom dia!")
}
if (turno="v") {
    console.log("Boa tarde!")
}
if (turno="n") {
    console.log("Boa noite!")
}

switch (turno) {
    case "m":
    console.log("Bom dia!")
    break;
    case "v":
    console.log("Boa tarde!")
    break;
    case "n":
    console.log("Boa noite!")
    break;
}