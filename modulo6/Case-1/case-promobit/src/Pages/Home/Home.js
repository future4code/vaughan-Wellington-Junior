import React from "react";
import styled from "styled-components";
import Promotion from "./Promotion/Promo";
import uga from '../../uga.png'
import MovieCatalog from "./Catalog/Catalog";
import Header from "../../Components/Header/Header";

const HomeBody = styled.div`
display: flex;
flex-direction: column;
align-items: center;
width: 100%;
`
function Home (){
    return(
    <HomeBody>
      
      <Header/>
      
      <Promotion/>

      <MovieCatalog/>          

    </HomeBody>        
    )
}

export default Home