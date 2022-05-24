import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { baseUrlImage } from "../../../Services/api";

const MovieCardBody = styled.div`
cursor: pointer;
background-color: crimson;
margin: 10px;
padding: 1em;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
text-align: center;
>img{
  margin: 0;
  width: 100%;
  height: 270px;
  object-fit: cover;
}
>p{
  margin: 2px;
}
`


function MovieCard ({id, title, image, releaseDate}){
    
  const navigate = useNavigate()
    
    function goToMovie(detail){

      navigate(`/movie_info/${detail}`)
    }

    
    return(
    <MovieCardBody key={id} onClick={() => goToMovie(id)}>
        <img src={`${baseUrlImage}${image}`} alt={`Poster de ${title}`}/>
        <p>{`${title} (${releaseDate.substring(0,4)})`}</p>
    </MovieCardBody>
    )
}

export default MovieCard