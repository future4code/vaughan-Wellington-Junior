import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import Header from "../../Components/Header/Header";
import MovieCast from "./MovieCast/MovieCast";
import RelatedMovies from "./RelatedMovies/RelatedMovies";


const DetailsBody = styled.div`
min-height: 100vh;
display: flex;
flex-direction: column;
align-items: center;
`

const MovieData = styled.div`
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

function MovieDetails(){ 
    
    const {id} = useParams()
    
    useEffect(()=>{getDetails()},[])

    const [detailData, setDetailData] = useState([])
    
    function getDetails(){
        axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=a09e6787ebc50291006f0161353f2949&language=pt-BR`)
        .then((res) => setDetailData(res.data))
    }

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

    console.log(detailData)

    const movieCard = detailData.detailData.map((movie) => {return <MovieData>

        <MoviePoster />

        <MovieText>
            <MovieHeader>
                <h2> {movie.title} {movie.release_date}</h2>
                <h4>{movie.runtime} - {movie.release_date}</h4>
            </MovieHeader>

            <MovieScore>
                <h4>Avaliação dos Usuários</h4>
            </MovieScore>

            <MovieSynopsis>
                <h3>Sinopse</h3>
                <p>{movie.overview}</p>
            </MovieSynopsis>
        </MovieText>

    </MovieData>})
    
    return(
        <DetailsBody>
            <Header/>

            {movieCard}

            <MovieCast/>

            <RelatedMovies/>

        </DetailsBody>
    )
}

export default MovieDetails