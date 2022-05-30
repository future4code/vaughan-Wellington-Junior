type nome = string
type quantidade = number
type valorUnitario = string|number
const products = [
	{ nome: "MacMugffin", quantidade: 37, valorUnitario: 51.040},
	{ nome: "Vassoura voadora", quantidade: 56, valorUnitario: 210.0},
	{ nome: "Laço da verdade", quantidade: 32, valorUnitario: 571.5},
	{ nome: "O precioso", quantidade: 1, valorUnitario: 9181.923},
	{ nome: "Caneta de 250 cores", quantidade: 123, valorUnitario: 17},
	{ nome: "Plumbus", quantidade: 13, valorUnitario: 140.44},
	{ nome: "Pokebola", quantidade: 200, valorUnitario: 99.9915}
]

type updatedProducts = []

const updatedProducts = products.map((data)=>{
    const adjustPrice = "R$ " + data.valorUnitario.toFixed(2).replace('.', ',')
    return {nome: data.nome, quantidade: data.quantidade, valorUnitario: adjustPrice}
})

const orderedProducts = updatedProducts.sort(function(a , b){ return b.quantidade - a.quantidade })

console.log(orderedProducts)