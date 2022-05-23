import React, { useEffect, useState } from "react";
import styled from "styled-components";
import uga from '../../../uga.png'

const MovieDataBody = styled.div`
width: 100%;
padding-top: 30px;
display: flex;
background-color: brown;
justify-content: center;
`
const MovieText = styled.div`
display: flex;
flex-direction: column;
width: 60%;
`
const MoviePoster = styled.img`
width: 250px;
height: 400px;
object-fit: cover;
padding: 25px;
`
const MovieHeader = styled.div`
padding: 25px;
>h2{
margin: 0;
}
>h4{
margin: 0;
}
`
const MovieScore = styled.div`

padding: 0 25px;
>h4{
    margin: 0;
}
`
const MovieSynopsis = styled.div`
padding: 25px;
>h3{
margin: 0;
padding-bottom: 8px;
}
>p{
margin: 0;
}
`

function MovieData(detailData){
    
    const movie = detailData.detailData

    function movieRuntime (time){
        let hours = Math.floor(time/60)
        let minutes = time % 60
        return `${hours}h${minutes}m`
    }

    function movieReleaseDate (date){
        let year = date.substring(0,4)
        let month = date.substring(5,7)
        let day = date.substring(8,10)
        return `${day}/${month}/${year}`
    }

    function movieYear (date){
        let year = date.substring(0,4)
        return year
    }

    return(
        <MovieDataBody>

            <MoviePoster src={uga}/>

            <MovieText>

                <MovieHeader>
                    <h2> {movie.title} {movieYear(movie.release_date)}</h2>
                    <h4>{movieRuntime(movie.runtime)} - {movieReleaseDate(movie.release_date)}</h4>
                </MovieHeader>

                <MovieScore>
                    <h4>Avaliação dos Usuários</h4>
                </MovieScore>

                <MovieSynopsis>
                    <h3>Sinopse</h3>
                    <p>{movie.overview}</p>
                </MovieSynopsis>
            </MovieText>
            
        </MovieDataBody>
    )
}

export default MovieData