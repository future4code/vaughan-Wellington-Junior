import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const Promo = styled.div`
background-size: cover;
background-repeat: no-repeat;
background-position: center;
width: 100%;
min-height: 380px;
display: flex;
`
const PromoDetails = styled.div`
background: rgb(0,0,0);
background: linear-gradient(90deg, rgba(0,0,0,1) 9%, rgba(0,0,0,0.3925945378151261) 67%);
padding: 20px;
display: flex;
flex-direction: column;
`

const PromoText = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
width: 45%;
color: white;
>h4{
  cursor: pointer;
}
`
const PromoTitle = styled.div`
display: flex;
>h3{
  margin-left: 8px;
}
`

function Promotion (movies){

    const list = movies.movies.slice(0,1)    

    const navigate = useNavigate()
    
    function goToMovie(detail){

      navigate(`/movie_info/${detail}`)
    }

    return(
    <Promo>        
        <PromoDetails>       
        
        {list?.map((movie) => {return <PromoText key={movie.id}>          
            
            <h3>Mais istos Hoje</h3>

            <PromoTitle>
                <h2>{movie.title}</h2> <h3>{movie.vote_average}</h3>
            </PromoTitle>

            <p>{movie.overview}</p>
            
            <h4 onClick={() => goToMovie(movie.id)}>Mais Detalhes</h4>

          </PromoText>})}

        </PromoDetails>        
    </Promo>)
}

export default Promotion