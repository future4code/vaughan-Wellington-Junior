
const clientes = [
	{ cliente: "João", saldoTotal: 1000, debitos: [100, 200, 300] },
	{ cliente: "Paula", saldoTotal: 7500, debitos: [200, 1040] },
	{ cliente: "Pedro", saldoTotal: 10000, debitos: [5140, 6100, 100, 2000] },
	{ cliente: "Luciano", saldoTotal: 100, debitos: [100, 200, 1700] },
	{ cliente: "Artur", saldoTotal: 1800, debitos: [200, 300] },
	{ cliente: "Soter", saldoTotal: 1200, debitos: [] }
]


function getNegative (){
    const getNegativeClients = clientes.filter((data) => {
        return data.saldoTotal - data.debitos.reduce((total, item) => {return total + item}, 0) < 0
    })

    const negativatedClients = getNegativeClients.map((data) =>{
        const saldo = data.saldoTotal - data.debitos.reduce((total, item) => {return total + item}, 0)
        return {cliente: data.cliente, saldoTotal: saldo}
    })

    console.log(negativatedClients)
}

getNegative()