function typeOfArgv():void{
    const entry: any = process.argv[2]
    console.log(typeof entry)
}

typeOfArgv()