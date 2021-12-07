// Exercícios de interpretação de código
//1-
//a) Ele verifica se o número é par
//b) Qualquer número divisível por 2
//c) Números ímpares

//2-
//a) Ele receberá o nome de uma fruta escrita pelo usuário, e então irá retornar o preço da mesma.
//b) "O preço da fruta Maçã é R$ 2.25"
//c) "O preço da fruta Pêra é R$ 5"
// ele vêm 5 ao invés de 5.5 pois a linha de código referente à Pêra não foi finalizada, logo ela vai puxar o resultado de default.

// Exercícios de escrita de código
// 1. ------------------------------------------------------------------------------------------------------------------------
const idadeUser = Number(prompt("Qual sua idade"))

if (idadeUser >= 18){
    console.log("Você tem idade para dirigir!")
} else {
    console.log("Você ainda não pode dirigir!")
}


// 2. ------------------------------------------------------------------------------------------------------------------------
let turnoAluno = prompt("Em qual turno você estuda? Digite para M (matutino), V para (Vespertino) ou N para (Noturno).")

if (turnoAluno === "M"){

    console.log("Bom Dia!")

} else if (turnoAluno === "V"){

    console.log("Boa Tarde!")

} else if (turnoAluno === "N"){

    console.log("Boa Noite!")

} else {
    console.log("Poxa, eu não entendi, poderia repetir?")
}


// 3. ------------------------------------------------------------------------------------------------------------------------
let turnoAluno2 = prompt("Em qual turno você estuda? Digite para M (matutino), V para (Vespertino) ou N para (Noturno)")
switch (turnoAluno2) {
    case "M":
        console.log("Bom Dia!")
        break;
    case "V":
        console.log("Boa Tarde!")
        break;
    case "N":
        console.log("Boa Noite!")
        break;
    default:
        console.log("Poxa, não entendi, poderia repetir?")
        break;
}


// 4. ------------------------------------------------------------------------------------------------------------------------
const perguntaFilme = prompt("Qual gênero de filme iremos assistir?").toLowerCase()
const valorIngresso = Number(prompt("Você sabe quanto está custando o ingresso?"))

if (perguntaFilme === "fantasia", valorIngresso <= 15){
    console.log("Bom Filme!")
} else {
    console.log("Escolha outro filme :(")
}