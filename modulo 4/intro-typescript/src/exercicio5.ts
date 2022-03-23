function checkNeedRenew():void{
    const currentYear = Number(process.argv[2])
    const birthYear = Number(process.argv[3])
    const docIssue = Number(process.argv[4])

    let userAge = currentYear - birthYear
    let docAge = currentYear - docIssue

    if (userAge <= 20) {
        console.log(docAge >= 5 ? "passou dos 5 anos e precisa renovar" : "ainda não passou dos 5 anos")
    } else if (userAge >= 20 || userAge <= 50 ) {
        console.log(docAge >= 10 ? "passou dos 10 anos e precisa renovar" : "ainda não passou dos 10 anos")
    } else if (userAge > 50 ) {
        console.log(docAge >= 15 ? "passou dos 15 anos e precisa renovar" : "ainda não passou dos 15 anos")
    } else {
        console.log("erro")
    }
}

checkNeedRenew()