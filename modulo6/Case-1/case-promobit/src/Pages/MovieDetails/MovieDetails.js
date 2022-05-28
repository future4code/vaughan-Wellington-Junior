import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Header from "../../Components/Header/Header";
import Loading from "../../Components/Loading/Loading";
import ScrollToTop from "../../Components/ScrollToTop/ScrollToTop";
import { baseUrlImage } from "../../Services/api";
import { CastBody, CastCard, CastGrid, DetailsBody, DetailsCard, MovieData, MovieHeader, MoviePoster, MovieScore, MovieSynopsis, MovieText, NoImageError, RelatedCard, RelatedGrid, RelatedMovies } from "./styled";
import NoImage from '../../Images/no-photos.png'

function MovieDetails(){ 
    
    const {id} = useParams()

    const [detailData, setDetailData] = useState({})

    const [credits, setCredits] = useState([])

    const [similar, setSimilar]  = useState([])

    const [choosenMovie, setChoosenMovie] = useState([])
    
    const [isLoading, setIsLoading] = useState(false);
    
    const navigate = useNavigate()
    
    function goToMovie(detail){
        setChoosenMovie(detail)        
        navigate(`/movie_info/${detail}`)
    }
        
    function getDetails(){
        setIsLoading(true)
        axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=a09e6787ebc50291006f0161353f2949&language=pt-BR`)
        .then((res) => {
            setDetailData(res.data)
            setIsLoading(false)
        })
    }

    function getCredits(){
        setIsLoading(true)
        axios.get(`https://api.themoviedb.org/3/movie/${id}/credits?api_key=a09e6787ebc50291006f0161353f2949&language=pt-BR`)
        .then((res) => {
            setCredits(res.data.cast.slice(0,6))
            setIsLoading(false)
        })
    }

    function getSimilar(){
        setIsLoading(true)
        axios.get(`https://api.themoviedb.org/3/movie/${id}/similar?api_key=a09e6787ebc50291006f0161353f2949&language=pt-BR&page=1`)
        .then((res) => {
            setSimilar(res.data.results.slice(0,6))
            setIsLoading(false)
        })
    }
    
    useEffect(()=>{
        getDetails()
        getCredits()
        getSimilar()}
        ,[choosenMovie])

    function movieRuntime (){
        let hours = Math.floor(detailData.runtime/60)
        let minutes = detailData.runtime % 60
        const runtime = `${hours}h${minutes}m`
        return runtime
    }

    const MovieDataCard = detailData.release_date && detailData.genres != null ?  <MovieData>
    
    {detailData.poster_path ? <MoviePoster src={`${baseUrlImage}${detailData.poster_path}`}/>:
    <NoImageError src={NoImage}/>
    }
                
    

    <MovieText>
        <MovieHeader>
            <h2>{detailData.title} {`(${detailData.release_date.substring(0,4)})`}</h2>
            <h4>{detailData.genres.slice(0,3).map((movie) => {return `${movie.name}, `})} - {movieRuntime()} - {`${detailData.release_date.substring(8,10)}/${detailData.release_date.substring(5,7)}/${detailData.release_date.substring(0,4)}`}</h4>
        </MovieHeader>

        <MovieScore>
            <h4><b>{detailData.vote_average}</b> - Avaliação</h4>
        </MovieScore>

        {detailData.overview ? <MovieSynopsis>
            <h3>Sinopse</h3>
            <p>{detailData.overview}</p>
        </MovieSynopsis>  : <MovieSynopsis>
            <h3>Não há sinopse dísponivel</h3>
        </MovieSynopsis> }
        
    </MovieText>

</MovieData> : <p>Carregando</p>

    
    return(
        <DetailsBody>
        
        <Header/>

        <ScrollToTop/>

        {isLoading ? <Loading/> : <DetailsCard>
            
            {MovieDataCard}
            
            <CastBody>        
                <h2>Elenco</h2>                
                <CastGrid>
                    {credits != null ? credits.map((credit) => {
                        return <CastCard key={credit.cast_id}>
                            {credit.profile_path ? <img src={`${baseUrlImage}${credit.profile_path}`} alt={`${credit.name}`}/> : 
                            <img src={NoImage} alt={`${credit.name}`}/>
                            }
                            
                                
                            <div>
                                <h4>{credit.character}</h4>
                                <p>{credit.name}</p>
                            </div>            
                    </CastCard>}) : <p>Carregando</p>}
                </CastGrid>    
            </CastBody>

            <RelatedMovies>
                <h2> Filmes Semelhantes</h2>

                <RelatedGrid>
                    {similar != null ? similar.map((movie) => {
                        return <RelatedCard key={movie.id} onClick={() => goToMovie(movie.id)}>
                        <img src={`${baseUrlImage}${movie.poster_path}`} alt={`${movie.title}`}/>                
                    
                        <h4>{`${movie.title} (${movie.release_date.substring(0,4)})`}</h4>
                    </RelatedCard> 
                    }) : <p>Carregando</p>}
                              
                </RelatedGrid>

            </RelatedMovies>
        </DetailsCard>}           

        </DetailsBody>
    )
}

export default MovieDetails