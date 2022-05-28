import React from "react";
import ScrollToTop from "../../../Components/ScrollToTop/ScrollToTop";
import { Catalog, MoviesGrid } from "../styled";
import MovieCard from "./MovieCard";


function MovieCatalog ({movies}){

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

export default MovieCatalog