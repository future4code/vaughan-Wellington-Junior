import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Promotion from "./Promotion/Promo";
import MovieCatalog from "./Catalog/Catalog";
import Header from "../../Components/Header/Header";
import { apiKey, baseUrlMovie} from "../../Services/api";
import axios from "axios";
import SearchMovieCatalog from "./Catalog/SearchCatalog";
import { clear } from "@testing-library/user-event/dist/clear";
import Loading from "../../Components/Loading/Loading";

const HomeBody = styled.div`
display: flex;
flex-direction: column;
align-items: center;
width: 100%;
`

const Pagination = styled.div`
display: flex;
justify-content: center;
align-items: center;
`
const SearchBar = styled.div`
background-color: red;
display: flex;
justify-content: space-between;
align-items: center;
width: 100%;
>input{
    margin: 10px;
}
`

const SearchButtons = styled.div`
margin: 10px;
>button{
    padding: 2px 10px;
    margin: 0 5px;
}
`

function Home (){

  const [movies, setMovies] = useState([])

  const [trendingMovies, setTrendingMovies] = useState([])

  const [orderBy, setOrderBy] = useState('popular') 

  const [search, setSearch] = useState('')

  const [isSearching, setIsSearching] = useState(false)

  const [searchResults, setSearchResults] = useState(String)  

  const [currentPage, setCurrentPage] = useState(1)

  const [totalPages, setTotalPages] = useState(Number)

  const [isLoading, setIsLoading] = useState(false);
  
  const pages = totalPages

  function goToNextPage(){
      setCurrentPage((page) => page + 1)
      window.scrollTo(0,0)
  }
  
  function goToPreviousPage(){
      setCurrentPage((page) => page - 1)
      window.scrollTo(0,0)
  }
  function changePage(event) {
  const pageNumber = Number(event.target.textContent);
  setCurrentPage(pageNumber) 
  window.scrollTo(0,0)
  }
  
  const getPaginationGroup = () => {
      let start = Math.floor((currentPage - 1) / 5) * 5;
      return new Array(5).fill().map((_, idx) => start + idx + 1);
  };

  function getTrendingMovies(){
  axios.get(`https://api.themoviedb.org/3/trending/movie/day?${apiKey}&language=pt-BR&`)
  .then((res) => setTrendingMovies(res.data.results))
}

  function getMovies(){
    setIsLoading(true)
    if (orderBy === 'popular'){
        axios.get(`${baseUrlMovie}popular?${apiKey}&language=pt-BR&page=${currentPage}&region=BR`)
        .then((res) => {
          setMovies(res.data.results)
          setTotalPages(res.data.total_pages)
          setIsLoading(false)      
        })
        .catch(() => {
          alert('Erro ao carregar')
          setIsLoading(false)
        })
    } else if ( orderBy === 'mostrated'){
        axios.get(`${baseUrlMovie}top_rated?${apiKey}&language=pt-BR&page=${currentPage}&region=BR`)
        .then((res) => {
          setMovies(res.data.results)
          setTotalPages(res.data.total_pages)
          setIsLoading(false)
        })
        .catch(() => {
          alert('Erro ao carregar')
          setIsLoading(false)
        })
    } else {<p>Erro</p>}
  }

  async function getSearchResults (){
    setIsLoading(true)
    await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=a09e6787ebc50291006f0161353f2949&language=pt-BR&query=${search}&page=${currentPage}&include_adult=false`)
    .then((res) => {
      setSearchResults(res.data.results)
      setTotalPages(res.data.total_pages)
      setIsLoading(false)
      setIsSearching(true)})
  }

  function handleSearchSubmit (event){
    setCurrentPage(1)  
    getSearchResults()
    console.log(search, isSearching, searchResults) 
  }

  useEffect(()=>{
    getMovies()
    getSearchResults()
    getTrendingMovies()
  },[currentPage, orderBy, totalPages])

    return(
      
    <HomeBody>

      <Header/>

      {isLoading? <Loading/> : 
      <div>
        <Promotion movies={trendingMovies}/>

        <SearchBar>
            <SearchButtons>
              <label>Ordernar por </label>
              <select name="ordenar por" value={orderBy} onChange={e => setOrderBy(e.target.value)}>
                <option value={'popular'}>Popularidade</option>
                <option value={'mostrated'}>Maior Avaliação</option>
              </select>
              
              </SearchButtons>
              <div>              
                <input
                  type='text'
                  placeholder="Pesquisar por filme..."
                  onChange={e => setSearch(e.target.value)}              
                />

                <button onClick={() => handleSearchSubmit()}>Buscar</button>
                              
              </div>         
              
        </SearchBar>

        {searchResults ? <SearchMovieCatalog movies={searchResults}/> : <MovieCatalog movies={movies}/>}

        <Pagination>
          {currentPage === 1 ? null : <button onClick={goToPreviousPage}>{`<`}</button>}
          {getPaginationGroup().map((item, index) => (
            <button
              key={index}
              onClick={changePage}
              className={`paginationItem ${currentPage === item ? 'active' : null}`}
            >
            <span>{item}</span>
            </button>
          ))}
          {currentPage === pages ? null : <button onClick={goToNextPage}>{`>`}</button>}
        </Pagination>      
      </div>} 
    </HomeBody>        
    )
}

export default Home