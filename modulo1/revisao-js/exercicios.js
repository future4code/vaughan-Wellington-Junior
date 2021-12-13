// ATENÇÃO!!!
//    -> NÃO COMENTE NENHUMA DAS FUNÇÕES DECLARADAS!!! 
//    -> NÃO MODIFIQUE OS PARÂMETROS DAS FUNÇÕES!!! ()


// EXERCÍCIO 01
function retornaTamanhoArray(array) {
    return array.length   
}

// EXERCÍCIO 02
function retornaArrayInvertido(array) {
    const arrayInvertido = array.reverse()
    return arrayInvertido
  
}

// EXERCÍCIO 03
function retornaArrayOrdenado(array) {
   const arrayOrdenada = array.sort((a, b) => a - b)
   return arrayOrdenada
}

// EXERCÍCIO 04
function retornaNumerosPares(array) {
    const arrayNumerosPares = array.filter(npar => (npar % 2) == 0)
    return arrayNumerosPares  
}

// EXERCÍCIO 05
function retornaNumerosParesElevadosADois(array) {
    const arrayNumerosPares = array.filter(npar => (npar % 2) == 0)
    const arrayElevada = arrayNumerosPares.map((numeros)=>{return Math.pow(numeros, 2)})
    return arrayElevada
}

// EXERCÍCIO 06
function retornaMaiorNumero(array) {
    const maiorNumero = Math.max(...array)
    return maiorNumero
  
}

// EXERCÍCIO 07
function retornaObjetoEntreDoisNumeros(num1, num2) {
    const maiorNumero = Math.max(num1, num2)
    const menorNumero = Math.min(num1, num2)
    const maiorDivisivelPorMenor = maiorNumero % menorNumero === 0
    const diferenca = maiorNumero - menorNumero

    obj = {};
    obj.maiorNumero = maiorNumero;
    obj.maiorDivisivelPorMenor = maiorDivisivelPorMenor;
    obj.diferenca = diferenca;

    return obj    
}

// EXERCÍCIO 08
function retornaNPrimeirosPares(n) {
    const array = []
    const arrayNPares = array.slice(0, n)
    return
}

// EXERCÍCIO 09
function classificaTriangulo(ladoA, ladoB, ladoC) {
   if (ladoA != ladoB != ladoC){
       return "Escaleno"
   } else if (ladoA == ladoB == ladoC){
       return "Equilátero"
   } else {
       return "Isósceles"
   }
}

// EXERCÍCIO 10
function retornaSegundoMaiorESegundoMenor(array) {
    const maiorNumero = Math.max(...array)
    const menorNumero = Math.min(...array)
    const segundoMaior
  
}

// EXERCÍCIO 11
function retornaChamadaDeFilme(filme) {
   
}

// EXERCÍCIO 12
function retornaPessoaAnonimizada(pessoa) {
   
}

// EXERCÍCIO 13A
function retornaPessoasAutorizadas(pessoas) {
   
}

// EXERCÍCIO 13B
function retornaPessoasNaoAutorizadas(pessoas) {
  
}

// EXERCÍCIO 14
function retornaContasComSaldoAtualizado(contas) {

}

// EXERCÍCIO 15A
function retornaArrayOrdenadoAlfabeticamente(consultas) {
  
}

// EXERCÍCIO 15B
function retornaArrayOrdenadoPorData(consultas) {
   
}