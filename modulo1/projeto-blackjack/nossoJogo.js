console.log("Boas vindas ao jogo de Blackjack!")

if(confirm("Quer iniciar uma nova rodada?")){
   const carta1 = comprarCarta();
   const carta2 = comprarCarta()
   
   const cartaUser1 = carta1.texto
   const cartaUser2 = carta2.texto
   const valorDasCartasUser = carta1.valor + carta2.valor
   console.log (`Usuário - cartas :${cartaUser1} ${cartaUser2}  - pontuação ${valorDasCartasUser}`)

   const carta3 = comprarCarta();
   const carta4 = comprarCarta()
   
   const cartaCPU1 = carta3.texto
   const cartaCPU2 = carta4.texto
   const valorDasCartasCPU = carta3.valor + carta4.valor
   console.log (`Computador - cartas :${cartaCPU1} ${cartaCPU2}  - pontuação ${valorDasCartasCPU} `)

      if (valorDasCartasUser === valorDasCartasCPU){
         console.log("Empate!") 
      } else if (valorDasCartasUser > valorDasCartasCPU){
         console.log("O Usuário ganhou!")
      } else if (valorDasCartasUser < valorDasCartasCPU ){
         console.log("O computador ganhou!") 
      }

} else {
   console.log("O jogo acabou")
}