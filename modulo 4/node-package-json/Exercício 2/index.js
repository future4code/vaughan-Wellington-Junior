switch(process.argv[2]){
    case 'add':
            const firstNumbAdd = process.argv[3]
            const secondNumbAdd = process.argv[4]
            console.log(`Resposta: ${Number(firstNumbAdd) + Number(secondNumbAdd)}`)
        break;
    case 'sub':
            const firstNumbSub = process.argv[3]
            const secondNumbSub = process.argv[4]
            console.log(`Resposta: ${Number(firstNumbSub) - Number(secondNumbSub)}`)
        break;
    case 'mult':
            const firstNumbMult = process.argv[3]
            const secondNumbMult = process.argv[4]
            console.log(`Resposta: ${Number(firstNumbMult) * Number(secondNumbMult)}`)
        break;
    case 'div':
            const firstNumbDiv = process.argv[3]
            const secondNumbDiv = process.argv[4]
            console.log(`Resposta: ${Number(firstNumbDiv) / Number(secondNumbDiv)}`)
        break
    default:
        console.log('erro na digitação, tente "add", "sub", "mult" ou "div"')
        break
}