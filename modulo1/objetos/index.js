// Exercícios de interpretação de código -------------------------

// 1.

//console.log(filme.elenco[0]) // "Matheus Nachtergaele"
//console.log(filme.elenco[filme.elenco.length - 1]) // "Virginia Cavendish"
//console.log(filme.transmissoesHoje[2]) // canal: "Globo", horario: "14h"


// 2.

// a.
console.log(cachorro) // {nome: 'Juca', idade: 3, raca: 'SRD'}
console.log(gato) // {nome: 'Juba', idade: 3, raca: 'SRD'}
console.log(tartaruga) // {nome: 'Jubo', idade: 3, raca: 'SRD'}

// b. Irá repetir a propriedade do objeto citado, entretanto, podendo ainda assim poder ser modificado posteriormente atraves dos comandos.




// 3.

// a.
console.log(minhaFuncao(pessoa, "backender")) // false
console.log(minhaFuncao(pessoa, "altura")) // undefined

// b. O false se deu pela função que faz com que o segundo string colocado se transforme em um valor, logo retornando o false da propriedade do objeto mencionado.
// O Undefined se deu por não existir a propriedade altura no objeto mencionado.


// Exercícios de escrita de código -------------------------------
// 1. ------------------------------------------------------------
const pessoa = {
    nome:"Amanda",
    apelido:["Amandinha"," Mandinha", " Mandi"]
}

function saida(){
console.log(`Eu sou ${pessoa.nome}, mas pode me chamar de: ${pessoa.apelido}`)
}

const saideira = saida()




// 2. ------------------------------------------------------------
const pessoaUm = {
    nome: "Bruno",
    idade: 23,
    profissao: "Instrutor",
}

const pessoaDois = {
    nome: "Fernando",
    idade: 30,
    profissao: "Médico",
}

function retornoArray(objeto) {
    const retornar = [objeto.nome, objeto.nome.length, objeto.idade, objeto.profissao, objeto.profissao.length]
    
    return retornar
}

console.log(retornoArray(pessoaUm));
console.log(retornoArray(pessoaDois));




// 3. ------------------------------------------------------------
const carrinho = []

const Maçã = {
   nome: "Maçã",
   disponibilidade: true 
}

const Banana = {
    nome: "Banana",
    disponibilidade: true 
 }

 const Uva = {
    nome: "Uva",
    disponibilidade: true 
 }

function receber(n1,n2,n3){
    carrinho.push(n1,n2,n3)
    return carrinho
}

console.log(receber(Maçã, Banana, Uva))
