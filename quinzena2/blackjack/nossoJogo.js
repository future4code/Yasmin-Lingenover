/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * 
 */


console.log("Bem vindo ao jogo de Blackjack!")

const jogo = confirm("Quer iniciar uma nova rodada?")

if (jogo) {
   console.log("Começando uma nova rodada")
} else {
   console.log("O jogo acabou")
}

if (jogo) {
   const carta1Jogador = comprarCarta()
   const carta2Jogador = comprarCarta()
   const carta1Pc = comprarCarta()
   const carta2Pc = comprarCarta()

   const resultadoJogador = carta1Jogador.valor + carta2Jogador.valor
   const resultadoPc = carta1Pc.valor + carta2Pc.valor

   console.log("Usuário - cartas: ", carta1Jogador.texto, carta2Jogador.texto, "- pontuação", resultadoJogador)
   console.log(`Computador - cartas: ${carta1Pc.texto} ${carta2Pc.texto} - pontuação ${resultadoPc}`)

   if (resultadoJogador > resultadoPc) {
      console.log("O usuário ganhou!")
   } else if (resultadoJogador < resultadoPc) {
      console.log("O computador ganhou!")
   } else if (resultadoJogador === resultadoPc) {
      console.log("Empate!")
   }

} else {
   console.log("O jogo acabou")
}