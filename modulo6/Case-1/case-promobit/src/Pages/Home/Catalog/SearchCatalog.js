import React from "react";
import ScrollToTop from "../../../Components/ScrollToTop/ScrollToTop";
import NotFound from "../../Error/NotFound";
import { Catalog, MoviesGrid } from "../styled";
import MovieCard from "./MovieCard";

function SearchMovieCatalog ({movies}){

    return(
    <Catalog>
        <ScrollToTop/>

        {movies.length == 0 ? <NotFound/>:  <MoviesGrid>
            {movies?.map((movie) => {return <MovieCard
              key={movie.id}
              id={movie.id}
              title={movie.title}
              image={movie.poster_path}
              releaseDate={movie.release_date}
              /> 
            })}                
      </MoviesGrid>}

       
    </Catalog> )
}

export default SearchMovieCatalog