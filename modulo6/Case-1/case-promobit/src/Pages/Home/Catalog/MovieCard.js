import React from "react";
import styled from "styled-components";
import uga from '../../../uga.png'

const MovieCardBody = styled.div`
background-color: crimson;
margin: 10px;
padding: 1em;
display: flex;
flex-direction: column;
align-items: center;
>img{
  margin: 0;
  width: 100%;
  height: 270px;
  object-fit: cover;
}
>p{
  margin: 0;
}
`


function MovieCard (){
    return(
    <MovieCardBody>
        <img src={uga}/>
        <p><b>Titulo</b><br/>2022</p>
    </MovieCardBody>
    )
}

export default MovieCard