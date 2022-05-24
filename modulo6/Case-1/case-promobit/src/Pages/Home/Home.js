import React, { useEffect, useState } from "react";
import Promotion from "./Promotion/Promo";
import MovieCatalog from "./Catalog/Catalog";
import Header from "../../Components/Header/Header";
import { apiKey, baseUrlMovie} from "../../Services/api";
import axios from "axios";
import SearchMovieCatalog from "./Catalog/SearchCatalog";
import Loading from "../../Components/Loading/Loading";
import { FilterSelect, HomeBody, Pagination, PaginationButton, PaginationButtonActive, ResetButton, SearchBar, SearchButton, SearchInput, SearchToolbar } from "./styled";

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
      setIsLoading(true)
      setCurrentPage((page) => page + 1)
      window.scrollTo(0,0)
      setIsLoading(false)
  }
  
  function goToPreviousPage(){
      setIsLoading(true)
      setCurrentPage((page) => page - 1)
      window.scrollTo(0,0)
      setIsLoading(false)
  }
  function changePage(event) {
      setIsLoading(true)
      const pageNumber = Number(event.target.textContent);      
      setCurrentPage(pageNumber) 
      window.scrollTo(0,0)
      setIsLoading(false)
  }
  
  const getPaginationGroup = () => {
      if (totalPages >=5){
        let start = Math.floor((currentPage - 1) / 5) * 5;
        return new Array(5).fill().map((_, idx) => start + idx + 1);
      } else if (totalPages < 5 ){
        let start = Math.floor((currentPage - 1) / totalPages) * totalPages;
        return new Array(totalPages).fill().map((_, idx) => start + idx + 1);
      }      
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
              <SearchToolbar>              
                <SearchInput
                  onKeyPress={(e) => {if (e.key === "Enter"){handleSearchSubmit()} else {  }} }
                  type='text'
                  placeholder="Pesquisar..."
                  onChange={e => setSearch(e.target.value)}              
                />
                <SearchButton onClick={() => handleSearchSubmit()}>Buscar</SearchButton>                              
              </SearchToolbar>

            {isSearching === true ? <ResetButton onClick={() => setSearchResults(null) & setIsSearching(false)}>Resetar</ResetButton> : <SearchToolbar>
              <label>Ordernar por </label>
              <FilterSelect name="ordenar por" value={orderBy} onChange={e => setOrderBy(e.target.value)}>
                <option value={'popular'}>Popularidade</option>
                <option value={'mostrated'}>Maior Avaliação</option>
              </FilterSelect>              
            </SearchToolbar>}                     
        </SearchBar>

        {isSearching === true & searchResults !== null ? <SearchMovieCatalog movies={searchResults}/> : <MovieCatalog movies={movies}/>}

        {totalPages <= 1 ? null : <Pagination>         
          
          {currentPage === 1 ? null : <PaginationButton onClick={goToPreviousPage}>{`<`}</PaginationButton>}
          
          {getPaginationGroup().map((item, index) => (<>
          {currentPage === item ? <PaginationButtonActive key={index} onClick={changePage} 
          >{item}</PaginationButtonActive> : <PaginationButton key={index} onClick={changePage} 
          >{item}</PaginationButton>}            
          </>
          ))}
          
          {currentPage === pages ? null : <PaginationButton onClick={goToNextPage}>{`>`}</PaginationButton>}

        </Pagination>}
              
      </div>} 
    </HomeBody>        
    )
}

export default Home