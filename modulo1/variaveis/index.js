/* Exercícios de interpretação de código
1. 10;  10,5;
2. 10,10,10;
3. horasTrabalhadas; recebePordia;
*/

//Exercícios de interpretação de código

//Exercício 1
let nome = prompt("Qual o seu nome?");
let idade = prompt("Qual é a sua idade?");
console.log("Olá",nome,"Você tem",idade,"anos");

//Exercício 2
let camisaAzul = false;
let bebeuCafe = true;
let foipraRua = false;
console.log("Você está usando camisa azul?","-",camisaAzul);
console.log("Você tomou café hoje?","-",bebeuCafe);
console.log("Você foi à rua hoje?","-",foipraRua);

//Exercício 3
let a = 10
let b = 25
let c = 10
c = a
a = b
b = c

console.log("O novo valor de a é", a) // O novo valor de a é 25
console.log("O novo valor de b é", b) // O novo valor de b é 10
