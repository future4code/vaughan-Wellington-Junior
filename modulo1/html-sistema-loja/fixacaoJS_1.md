```function calculaSalario(qtdeCarrosVendidos, valorTotalVendas) {
if (qtdeCarrosVendidos === 0){

   salario = 2000

   return salario

 } else if (qtdeCarrosVendidos > 0) {
    
    const valorCadaCarro = valorTotalVendas / qtdeCarrosVendidos
    const comissãoCarro = (100 * qtdeCarrosVendidos) + ( qtdeCarrosVendidos * ((valorCadaCarro * 5) / 100))
    const salario = 2000 + comissãoCarro

    return salario
}}```