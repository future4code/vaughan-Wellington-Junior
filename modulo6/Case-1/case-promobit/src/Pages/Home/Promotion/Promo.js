import React from "react";
import { useNavigate } from "react-router-dom";
import { baseUrlImage } from "../../../Services/api";
import { Promo, PromoDetails, PromoImage, PromoText, PromoTitle } from "./styled";


function Promotion (movies){

    const list = movies.movies.slice(0,1)    

    const navigate = useNavigate()
    
    function goToMovie(detail){

      navigate(`/movie_info/${detail}`)
    }

    return(
      
    <Promo>   
              
        
        {list?.map((movie) => {return <PromoDetails>

          <PromoImage src={`${baseUrlImage}${movie.backdrop_path}`} alt={`${movie.title}`}/>

          <PromoText key={movie.id}>
            <h3>Mais Visto Hoje</h3>
            <PromoTitle>
                <h2>{movie.title}</h2> <h3>{movie.vote_average}</h3>
            </PromoTitle>
            <p style={{ width: 700 }}> {movie.overview}</p>            
            <h4 onClick={() => goToMovie(movie.id)}>Mais Detalhes {`>>`}</h4>  
          </PromoText>         

        </PromoDetails>})}       
    </Promo>)
}

export default Promotion