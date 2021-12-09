// EXEMPLOS DE IMPLEMENTAÇÃO ---------------------------------------------------------------

// EXERCÍCIO 0A
function soma(num1, num2) {
  // implemente sua lógica aqui
  return num1 + num2
}

// EXERCÍCIO 0B
function imprimeMensagem() {
  // implemente sua lógica aqui
  const mensagem = prompt('Digite uma mensagem!')

  console.log(mensagem)
}

// EXERCÍCIOS PARA FAZER ------------------------------------------------------------------

// EXERCÍCIO 01
function calculaAreaRetangulo() {
  // implemente sua lógica aqui
  const numero1 = prompt("Digite um número")
  const numero2 = prompt("Digite outro número")
  const areaRet = numero1 * numero2
  
  console.log(areaRet)

}

// EXERCÍCIO 02
function imprimeIdade(n1, n2) {
  // implemente sua lógica aqui
  const AnoA = Number(prompt("Em que ano você está?"))
  const AnoB = Number(prompt("Qual ano você nasceu?"))
  const IdadeUser = AnoA - AnoB

  console.log(IdadeUser)
}

// EXERCÍCIO 03
function calculaIMC(peso, altura) {
  // implemente sua lógica aqui
  return peso /(altura * altura)
}

// EXERCÍCIO 04
function imprimeInformacoesUsuario() {
  // implemente sua lógica aqui
  // "Meu nome é NOME, tenho IDADE anos, e o meu email é EMAIL."
  const nome = prompt("Qual seu nome")
  const idade = prompt("Qual sua idade")
  const email = prompt("Qual seu email")
  
  console.log(`Meu nome é ${nome}, tenho ${idade} anos, e o meu email é ${email}.`)

}

// EXERCÍCIO 05
function imprimeTresCoresFavoritas() {
  // implemente sua lógica aqui
  const cor1 = prompt("Digite uma cor que você gosta")
  const cor2 = prompt("Digite outra cor que você gosta")
  const cor3 = prompt("Digite apenas mais uma cor que você")

  const corfavorita = [cor1, cor2, cor3]

  console.log(corfavorita)

}

// EXERCÍCIO 06
function retornaStringEmMaiuscula(string) {
  // implemente sua lógica aqui
  const palavraN = string
  const palavraM = palavraN.toUpperCase()

  return `${palavraM}`
}

// EXERCÍCIO 07
function calculaIngressosEspetaculo(custo, valorIngresso) {
  // implemente sua lógica aqui
  return (custo / valorIngresso)
}

// EXERCÍCIO 08
function checaStringsMesmoTamanho(string1, string2) {
  // implemente sua lógica aqui
  const word1 = Number(string1.length)
  const word2 = Number(string2.length)

  return word1 === word2
}

// EXERCÍCIO 09
function retornaPrimeiroElemento(array) {
  // implemente sua lógica aqui
 return array[0]
}

// EXERCÍCIO 10
function retornaUltimoElemento(array) {
  // implemente sua lógica aqui
  return array[array.length-1]

 
}

// EXERCÍCIO 11
function trocaPrimeiroEUltimo(array) {
  // implemente sua lógica aqui
  const primeiroAr = array[0]
  const ultimoAr = array[array.length-1]

  return array.splice(primeiroAr, 1, ultimoAr, 0)

  // ----Essa foi meu calcanhar de aquiles, não consegui bolar nenhum jeito.-----
  // ---Foram diversas tentativas, e as tentativas que mais se aproximaram das---
  // ------------resposta se perderam nos mares do CTRL + Z. (F)-----------------
  // ----------Adoraria depois algo mostrando como resolver ela,-----------------
  // Realmente fiquei bastente intrigado na forma de como se poderia resolver ela!
  
}

// EXERCÍCIO 12
function checaIgualdadeDesconsiderandoCase(string1, string2) {
  // implemente sua lógica aqui
  const wordUser1 = string1.toLowerCase()
  const wordUser2 = string2.toLowerCase()

  return (wordUser1 === wordUser2)
}

// EXERCÍCIO 13
function checaRenovacaoRG() {
  // implemente sua lógica aqui

}

// EXERCÍCIO 14
function checaAnoBissexto(ano) {
  // implemente sua lógica aqui

}

// EXERCÍCIO 15
function checaValidadeInscricaoLabenu() {
  // implemente sua lógica aqui

}