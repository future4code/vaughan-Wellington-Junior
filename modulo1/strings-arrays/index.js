// Exercícios de interpretação de código

// 1 --------------------------------------

// A.
let array;
console.log('a. ', array); // a. undefined


// B.
array = null;
console.log('b. ', array); // b. null


// C.
array = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
console.log('c. ', array.length); // c. 11


// D.
let i = 0;
console.log('d. ', array[i]); // d. 3


// E.
array[i+1] = 19;
console.log('e. ', array); // não entendi :c


// F.
const valor = array[i+6];
console.log('f. ', valor); // f. 9


// 2 --------------------------------------
const frase = prompt("Digite uma frase")
console.log(frase.toUpperCase().replaceAll("A", "I"), frase.length) // SUBI NUM ÔNIBUS EM MiRROCOS . 27


// Exercícios de Escrita de código

//1 --------------------------------------

const nomeDoUsuario = prompt('Olá! qual o seu nome?')
const emailDoUsuario = prompt('Qual o seu email para contato?')

console.log(`O e-mail ${emailDoUsuario} foi cadastrado com sucesso. Seja bem-vindo(a), ${nomeDoUsuario}!`)

//2 --------------------------------------

const listaDeComidas = ["Hamburguer ", "Fígado ", "Pizza ", "Lasanha ", "Batata "]
console.log(`Essas são minhas comidas preferidas:`)
console.log(listaDeComidas[0])
console.log(listaDeComidas[1])
console.log(listaDeComidas[2])
console.log(listaDeComidas[3])
console.log(listaDeComidas[4])

//C.
const comidaUsuario = prompt("Qual a sua comida favorita?");
listaDeComidas.splice(1,1,comidaUsuario);
console.log(`Coloquei sua comida na minha lista, olha só! ${listaDeComidas}`);

//3 ----------------------------------------

const ArrayListaDeTarefas = []
const ListaDeTarefas1 = prompt("Fale uma atividade do qual você realizará");
const ListaDeTarefas2 = prompt("Cite outra");
const ListaDeTarefas3 = prompt("Cite só mais uma");

ArrayListaDeTarefas.push(ListaDeTarefas1, ListaDeTarefas2, ListaDeTarefas3);
console.log(`Sua lista de tarefas é ${ArrayListaDeTarefas}`);

const indiceTarefa = prompt("Dígite o índice de uma tarefa já realizada (de 0 à 2).")
ArrayListaDeTarefas.splice(indiceTarefa, 1);
console.log(`A sua nova Lista de tarefas é ${ArrayListaDeTarefas}`);



