import React from "react";
import { useNavigate } from "react-router-dom";
import { baseUrlImage } from "../../../Services/api";
import { MovieCardBody } from "../styled";
import NoImage from "../../../Images/no-photos.png"


function MovieCard ({id, title, image, releaseDate}){
    
  const navigate = useNavigate()
    
    function goToMovie(detail){

      navigate(`/movie_info/${detail}`)
    }

    
    return(
    <MovieCardBody key={id} onClick={() => goToMovie(id)}>
        {image? <img src={`${baseUrlImage}${image}`} alt={`Poster de ${title}`}/> :
        <img src={NoImage} alt={`Poster de ${title}`}/> }
        <p>{`${title} (${releaseDate.substring(0,4)})`}</p>
    </MovieCardBody>
    )
}

export default MovieCard