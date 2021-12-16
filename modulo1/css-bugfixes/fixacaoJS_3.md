```function calculaNota(ex, p1, p2) {
  // Escreva seu código aqui
  const media = (ex + (p1 * 2) + (p2 * 3)) / 6;
  if (media < 6){

    return "D"

  } else if (media >= 6 && media < 7.5){

    return "C"

  } else if (media < 9 && media >= 7.5){

    return "B"

  } else if (media >= 9){

    return "A"
    
  }
} ```