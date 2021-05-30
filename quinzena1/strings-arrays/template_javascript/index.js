// EXERCÍCIO 1

const nomeDoUsuario = prompt("Qual seu nome?")
const emailDoUsuario = prompt("Qual seu e-mail?")

console.log(`O e-mail ${emailDoUsuario} foi cadastrado com sucesso. Seja bem-vinda(o) ${nomeDoUsuario}`)


// EXERCÍCIO 2

const comidas = ["Lasanha", "Empadão", "Bolo", "Coxinha", "Pudim"]
console.log("comidas", comidas)
console.log("Essas são as minhas comidas preferidas:")
console.log("1:", comidas[0])
console.log("2:", comidas[1])
console.log("3:", comidas[2])
console.log("4:", comidas[3])
console.log("5:", comidas[4])

const comidaUsuario = prompt("Qual é a sua comida preferida?")
comidas[1] = comidaUsuario
console.log("Novas comidas preferidas:")
console.log("1:", comidas[0])
console.log("2:", comidas[1])
console.log("3:", comidas[2])
console.log("4:", comidas[3])
console.log("5:", comidas[4])


// EXERCÍCIO 3

array = []
const tarefa1 = prompt("Escreva uma tarefa que você precisa fazer no dia")
const tarefa2 = prompt("Cite mais uma tarefa")
const tarefa3 = prompt("Uma última tarefa")
array = [tarefa1, tarefa2, tarefa3]
console.log("Essas são suas tarefas do dia:", array)
const tarefaNova = Number(prompt("Entre 1 e 3, qual das tarefas você já realizou?"))



