
// Exercícios de interpretação de código

// 1. --------------------------------------
// A. 10 ; 50
// B. Eles não seriam impressos no console

// 2. --------------------------------------
// A. Ela deixará todas as palavras da frase minúsculas e dará uma boolean caso a frase contenha a palavra "cenoura".
// B. i = true ; ii = true ; iii = true


// Exercícios de escrita de código

// 1. --------------------------------------
// A.
function esteSouEu(){
    console.log(`Eu sou Wellington, tenho 20 anos, moro em pernambuco e sou estudante.`)
 }
esteSouEu()


// B.
function esteSouEu2(hello){
    console.log(`Eu sou ${nome}, tenho ${idade} anos, moro em ${endereço} e sou ${profissao}.`)
 }

const pessoinha = esteSouEu2(
    nome = prompt("Qual o seu nome?"),
    idade = prompt("Qual sua idade?"),
    endereço = prompt("Onde você mora?"),
    profissao = prompt("Qual a sua profissão?"));



// 2. --------------------------------------

// A.
function somar(numero1,numero2){
    const soma = numero1 + numero2

    return soma
}
let somaTotal = somar(
    Number(prompt("Vamos somar? Digite um numero para a soma")),
    Number(prompt("Digite mais um número para a soma!")))

console.log(`A soma total dos números foi de ${somaTotal}!`)


// B.
function umaBoolean(numero1, numero2){
    const maiorQue = numero1 > numero2

    return maiorQue
}
const respostaBool = umaBoolean(
    Number(prompt("Vamos ver qual número é o maior? Digite um número!")),
    Number(prompt("Digite outro número para a comparação"))
)
console.log(`O primeiro número é maior que o segundo? ${respostaBool}`);

// C.
function outraBoolean(numero1){
    const divisao = numero1 % 2
    const seraPar = divisao === 0
    
    return seraPar
}
const numerEscolhido = outraBoolean(prompt("Vamos ver se o número é par? Digite um número!"))
console.log(`Será o seu número par? ${numerEscolhido}`)

// D.
function mushiMushi(mensagem){
    msg = mensagem.toUpperCase()
   
    return `${msg} / ${msg.length}`
}
const message = mushiMushi(prompt("Escreva qualquer coisa e eu deixarei de forma maiúscula, e ainda direi quantos caracteres ele possui!"))
console.log(message)


// 3. --------------------------------------
function matématica(n1,n2){
    let adicao = n1 + n2
    let subtracao = n1 - n2
    let multiplicacao = n1 * n2
    let divisao = n1 / n2

    return `
    Números inseridos: ${n1} e ${n2}
    Soma: ${adicao}
    Diferença: ${subtracao}
    Multiplicação: ${multiplicacao}
    Divisão: ${divisao}`
}

let uau = matématica(
    Number(prompt("Que tal tentarmos fazermos as 4 operações matemáticas? Digite um número!")),
    Number(prompt("Digite mais um número para fazermos as contas!"))
)
console.log(uau)