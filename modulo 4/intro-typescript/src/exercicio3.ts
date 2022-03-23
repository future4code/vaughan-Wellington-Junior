function checkYear():void{
    const year = Number(process.argv[2])
    const cond1 = year % 400 === 0
    const cond2 = (year % 4 === 0) && (year % 100 !== 0)
    if (cond1 == true || cond2 == true) { console.log('É bissexto')} else {console.log('Não é bissexto')}
}

checkYear()