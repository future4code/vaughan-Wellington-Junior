import React, { useState, useEffect } from "react";
import axios from "axios";
import "./pokeCard.css"

function PokeCard (props) {
 
  const [pokemon, setPokemon] = useState({})

  useEffect(() => {
    pegaPokemon(props.pokemon)
  },[props.pokemon])

  const pegaPokemon = pokeName => {
    axios.get(`https://pokeapi.co/api/v2/pokemon/${pokeName}`)
    .then(response =>
      setPokemon( response.data ))
    .catch(err => {
        console.loge(err)
      })
  }
  
  const firstLetterUpperCase = (nome) =>{
    return nome.charAt(0).toUpperCase() + nome.slice(1)
    }

  return (
    <div className="poke-card">
      <div className="poke-info">

        <h2><strong>{firstLetterUpperCase(pokemon.name)}</strong></h2>

        <p><strong>Peso: </strong>{pokemon.weight}kg</p>

        {pokemon.types && <p><strong>Tipo:</strong>{firstLetterUpperCase(pokemon.types[0].type.name)}</p>}

      </div>    

      {pokemon.sprites && (
        <img style={{ width:200}} src={pokemon.sprites.front_default} alt={pokemon.name} />
      )}
      
    </div>
  );
}

export default PokeCard;
