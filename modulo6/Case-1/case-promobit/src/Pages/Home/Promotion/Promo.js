import React from "react";
import styled from "styled-components";
import uga from '../../../uga.png'

const Promo = styled.div`
background-image: url(${uga});
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
`
const PromoTitle = styled.div`
display: flex;
`

function Promotion (){
    return(
    <Promo>        
        <PromoDetails>
          <PromoText>
          <h3>Em Destaque</h3>

          <PromoTitle>
            <h2>Titulo do Filme</h2> <h3>10</h3>
          </PromoTitle>

          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          <p>Mais Detalhes</p>
          </PromoText>                 
        </PromoDetails>        
    </Promo>)
}

export default Promotion