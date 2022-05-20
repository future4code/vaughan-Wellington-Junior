import React from "react";
import styled from "styled-components";
import uga from '../../../uga.png'
import MovieCard from "./MovieCard";

const Catalog = styled.div`
background-color: coral;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
width: 100%;
`
const SearchBar = styled.div`
background-color: red;
display: flex;
justify-content: space-between;
align-items: center;
width: 100%;
>input{
    margin: 10px;
}
`

const SearchButtons = styled.div`
margin: 10px;
>button{
    padding: 2px 10px;
    margin: 0 5px;
}
`

const MoviesGrid = styled.div`
width: 100%;
display: grid;
grid-template-columns: repeat(6, 1fr);
gap: 2%;
`

function MovieCatalog (){
    return(
    <Catalog>
        <SearchBar>
          <SearchButtons>
            <button>Ordenar</button>
            <button>Filtrar</button>
          </SearchButtons>          
          <input placeholder="Buscar..."/>
        </SearchBar>

        <MoviesGrid>
            <MovieCard/>
            <MovieCard/>
            <MovieCard/>
            <MovieCard/>
            <MovieCard/>
            <MovieCard/>
            <MovieCard/>
            <MovieCard/>
            <MovieCard/>
            <MovieCard/>
            <MovieCard/>
            <MovieCard/>        
        </MoviesGrid>

        <p>1 2 3 4</p>

        
      </Catalog> )
}

export default MovieCatalog