/* EXERCÍCIO INTERPRETAÇÃO DE CÓDIGO

1.------------------------------------------
const bool1 = true
const bool2 = false
const bool3 = !bool2

let resultado = bool1 && bool2 
console.log("a. ", resultado) // false

resultado = bool1 && bool2 && bool3 
console.log("b. ", resultado) // false

resultado = !resultado && (bool1 || bool2) 
console.log("c. ", resultado) // true

console.log("d. ", typeof resultado) // boolean

2.------------------------------------------
 
Os números estão em string, logo, estão em formato de texto. Terá que ser feita uma conversão de string para number

3.------------------------------------------
const primeiroNumerotex = prompt("Digite um numero!")
const primeiroNumero = Number(primeiroNumerotex)

const segundoNumerotex = prompt("Digite outro numero!")
const segundooNumero = Number(segundoNumerotex)

const soma = primeiroNumero + segundooNumero

console.log(soma)

*/


// EXERCÍCIOS DE ESCRITA DE CÓDIGO


//1.------------------------------------------
const idadeUser = prompt("Qual a sua idade?");
const idadeUserN = Number(idadeUser);
const idadeBFF = prompt("Qual a idade de seu melhor amigo(a)?");
const idadeBffN = Number(idadeBFF);

maisVelho = idadeUserN > idadeBffN

console.log("Sua idade é maior do que a do seu melhor amigo?", maisVelho);


//2.-------------------------------------------
const numeroPar = prompt("Digite um número par!");
const numeroparN = Number(numeroPar);

restodaDivisao = numeroparN % 2
console.log(restodaDivisao); 
// Não houve sobra, pois todos os números pares são divididos por 2, logo, não há sobra.
// Entretanto, se colocarmos números impares tal como 9 ou 11, restará, pois esses números não são dividos na forma de número inteiro. 


//3.------------------------------------------
const idadeAnos = prompt("Quantos anos você tem?")
const idadeAnosN = Number(idadeAnos)

const meses = idadeAnos * 12
const dias = meses * 30
const horas = dias * 24

console.log("Você viveu até agora",idadeAnosN,"anos,",meses,"meses,",dias,"dias e",horas,"horas");


//4.------------------------------------------
const primeiroNum = prompt("Digite um número.");
const primeiroNumN = Number(primeiroNum);
const segundoNum = prompt("Digite outro número.");
const segundoNumN = Number(segundoNum);

const maiorqueSeg = primeiroNumN > segundoNumN
console.log("O primeiro numero é maior que segundo?",maiorqueSeg);

const igualaoSeg = primeiroNumN === segundoNumN
console.log("O primeiro numero é igual ao segundo?",igualaoSeg);

const divisivelSeg = primeiroNumN % segundoNumN
const divisivelSegbo = divisivelSeg === 0
console.log("O primeiro numero é divisível pelo segundo?",divisivelSegbo);

const divisivelPri = segundoNumN % primeiroNumN
const divisivelPribo = divisivelPri === 0
console.log("O segundo numero é divisível pelo primeiro?", divisivelPribo);