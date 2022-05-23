import React from "react";
import styled from "styled-components";
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
grid-template-columns: repeat(5, 1fr);
gap: 2%;
`

function MovieCatalog ({movies}){

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
            {movies?.map((movie) => {return <MovieCard
              key={movie.id}
              id={movie.id}
              title={movie.title}
              image={movie.poster_path}
              releaseDate={movie.release_date}
              /> 
            })}
                
        </MoviesGrid>

        <p>1 2 3 4</p>

        
      </Catalog> )
}

export default MovieCatalog