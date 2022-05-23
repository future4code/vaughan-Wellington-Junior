import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Promotion from "./Promotion/Promo";
import MovieCatalog from "./Catalog/Catalog";
import Header from "../../Components/Header/Header";
import { apiKey, baseUrlMovie} from "../../Services/api";
import axios from "axios";

const HomeBody = styled.div`
display: flex;
flex-direction: column;
align-items: center;
width: 100%;
`
function Home (){

  const [movies, setMovies] = useState([])

  const [topRatedMovies, setTopRatedMovies] = useState([])

  const [trendingMovies, setTrendingMovies] = useState([])

  function getPopularMovies (){
    axios.get(`${baseUrlMovie}popular?${apiKey}&language=pt-BR&page=1&region=BR`)
    .then((res) => setMovies(res.data.results))
}
  function getTopRatedMovies(){
    axios.get(`${baseUrlMovie}top_rated?${apiKey}&language=pt-BR&page=1region=BR`)
    .then((res) => setTopRatedMovies(res.data.results))
}

  function getTrendingMovies(){
  axios.get(`https://api.themoviedb.org/3/trending/movie/day?${apiKey}&language=pt-BR&`)
  .then((res) => setTrendingMovies(res.data.results))
}



  useEffect(()=>{
    getPopularMovies()
    getTopRatedMovies()
    getTrendingMovies()
  },[])
    return(
    <HomeBody>
      
      <Header/>
      
      <Promotion movies={trendingMovies}/>

      <MovieCatalog movies={movies}/>          

    </HomeBody>        
    )
}

export default Home