import React from "react";
import styled from "styled-components";
import ScrollToTop from "../../../Components/ScrollToTop/ScrollToTop";
import MovieCard from "./MovieCard";

const Catalog = styled.div`
background-color: coral;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
width: 100%;
`
const MoviesGrid = styled.div`
width: 100%;
display: grid;
grid-template-columns: repeat(5, 1fr);
grid-row-gap: 20px;
grid-column-gap: 20px;
`

function SearchMovieCatalog ({movies}){

    return(
    <Catalog>
        <ScrollToTop/>

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
    </Catalog> )
}

export default SearchMovieCatalog