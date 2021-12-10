// Exercício de interpretação de Códigos

// 1.
// Em resumo, ele dará 3 arrays cada um com suas diferenças, o primeiro conterá apenas os itens dentro do array, o segundo irá conter o indice e os itens do array, já o terceiro irá recitar o array por completo.
// Isso se deu justamente por termos pedido essas 3 coisas: O Item, o indice e o Array

// 2.
// ["Amanda Rangel", "Laís Petra", "Letícia Chijo"]

// 3.
// [{nome: "Amanda Rangel", apelido: "Mandi"}, {nome: "Laís Petra", apelido: "Laura"}]





// Exercícios de Escrita de Código
// 1. 
// A.----------------------------------------------------------------------------
const pets = [
    { nome: "Lupin", raca: "Salsicha"},
    { nome: "Polly", raca: "Lhasa Apso"},
    { nome: "Madame", raca: "Poodle"},
    { nome: "Quentinho", raca: "Salsicha"},
    { nome: "Fluffy", raca: "Poodle"},
    { nome: "Caramelo", raca: "Vira-lata"},
 ]

const nomeDosPets = pets.map((pet) => {
    return pet.nome
})
console.log(nomeDosPets)





// B.----------------------------------------------------------------------------
const arraySalsicha = pets.filter((pet) => {
    return pet.raca === "Salsicha"
})
console.log(arraySalsicha)





// C.----------------------------------------------------------------------------
const petsPoodle = pets.filter((petRaca) => {
    return petRaca.raca === "Poodle"
})
const mensagemDesconto = petsPoodle.map((pet) => {
    return `Você ganhou um cupom de desconto de 10% para tosar o/a ${pet.nome}!`
})
console.log(mensagemDesconto)





// 2.----------------------------------------------------------------------------
// A.----------------------------------------------------------------------------
const produtos = [
    { nome: "Alface Lavada", categoria: "Hortifruti", preco: 2.5 },
    { nome: "Guaraná 2l", categoria: "Bebidas", preco: 7.8 },
    { nome: "Veja Multiuso", categoria: "Limpeza", preco: 12.6 },
    { nome: "Dúzia de Banana", categoria: "Hortifruti", preco: 5.7 },
    { nome: "Leite", categoria: "Bebidas", preco: 2.99 },
    { nome: "Cândida", categoria: "Limpeza", preco: 3.30 },
    { nome: "Detergente Ypê", categoria: "Limpeza", preco: 2.2 },
    { nome: "Vinho Tinto", categoria: "Bebidas", preco: 55 },
    { nome: "Berinjela kg", categoria: "Hortifruti", preco: 8.99 },
    { nome: "Sabão em Pó Ypê", categoria: "Limpeza", preco: 10.80 }
 ]

const nomeProdutos = produtos.map((produto) => {
    return produto.nome
})

console.log (nomeProdutos)





// B.----------------------------------------------------------------------------
const precosProdutos = produtos.map((produto)=>{
    const desconto = produto.preco - (produto.preco * 0.05)
    const descontoFormatado = desconto.toFixed(2)
    return {nome: produto.nome, preco: descontoFormatado}
})
console.log(precosProdutos)





// C.----------------------------------------------------------------------------
const apenasBebidas = produtos.filter((tipoProduto) => {
    return tipoProduto.categoria === "Bebidas"
})
console.log(apenasBebidas)





// D. ----------------------------------------------------------------------------
const produtosYpe = produtos.filter((nomeProduto) => {
    return nomeProduto.nome.includes("Ypê")
})

console.log(produtosYpe)





// E.----------------------------------------------------------------------------
const promocaoYpe = produtosYpe.map((produto) =>{
    return `Compre ${produto.nome} por R$ ${produto.preco}!`
})
console.log(promocaoYpe)