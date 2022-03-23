function printFavoriteColors():void{
    const cor1: string = process.argv[2]
    const cor2: string = process.argv[3]
    const cor3: string = process.argv[4]

    console.log('Suas cores favoritas são ',cor1, cor2, cor3)
}

printFavoriteColors()