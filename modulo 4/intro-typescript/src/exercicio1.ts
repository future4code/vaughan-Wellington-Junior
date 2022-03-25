function checaTriangulo():void {
    const a = Number(process.argv[2])
    const b = Number(process.argv[3])
    const c = Number(process.argv[4])    
    if (a !== b && b !== c) { 
      console.log("Escaleno") 
    } else if (a === b && b === c) {
      console.log("Equilátero");
    } else {
      console.log("Isósceles");
    }
  }

checaTriangulo()