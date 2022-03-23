function compareNumbers():void{
    const num1 = Number(process.argv[2])
    const num2 = Number(process.argv[3])
    let greaterNumber;
    let lesserNumber;
    if (num1 > num2) {
        greaterNumber = num1
        lesserNumber = num2
    } else {
        greaterNumber = num2
        lesserNumber = num1
    }
    const diff = greaterNumber - lesserNumber

    console.log(diff)
}

compareNumbers()