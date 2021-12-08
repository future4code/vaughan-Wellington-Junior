// Exercícios de Escrita de código
// 1. --------------------------------------------------------------
const quantidadePets = Number(prompt("Quantos pets você tem?"))
const arrayPet = []
if (quantidadePets === 0){

    console.log("Que pena, devia adotar um bichinho!")

} else {
    
    for(let i = 0; i < quantidadePets; i++){
        let nomes = prompt("nome")
        arrayPet.push(nomes)
    } console.log(arrayPet)
}
//-------------------------------------------------------------------
/* My bad
                           __ _..._ _ 
                           \ `)    `(/
                           /`       \
                           |   d  b  |
             .-"````"=-..--\=    Y  /=
           /`               `-.__=.'  // peço desculpas breviamente, mas hoje não consegui resolver as demais questões, e nem consegui me concentrar no assunto dado
    _     / /\                 /o     // isso não foi de forma alguma responsabilidade do tutor do assunto, foi apenas resultado de problemas pessoais
   ( \   / / |                 |      // irei correr posteriormente atrás de mais estudos sobre o assunto para que eu não fique perdido no futuro.
    \ '-' /   >    /`""--.    /
     '---'   /    ||      |   \\
        jgs  \___,,))      \_,,))  
*/