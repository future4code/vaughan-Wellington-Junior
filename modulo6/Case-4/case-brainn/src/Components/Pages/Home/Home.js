import React from "react";
import { useNavigate } from "react-router-dom";
import { BodyHome, ButtonsDiv, ButtonsStyled, HomeTitle } from "./styled";

export default function Home(){

    const navigate = useNavigate()
    
    return(
        <BodyHome>
            <HomeTitle>Confira os Últimos Resultados</HomeTitle>
            <ButtonsDiv>
                <ButtonsStyled style={{ backgroundColor: '#6BEFA3'}} onClick={()=> navigate('/megasena')}>MEGA-SENA</ButtonsStyled>
                <ButtonsStyled style={{ backgroundColor: '#8666EF'}} onClick={()=> navigate('/quina')}>QUINA</ButtonsStyled>
                <ButtonsStyled style={{ backgroundColor: '#DD7AC6'}} onClick={()=> navigate('/lotofacil')}>LOTOFACIL</ButtonsStyled>
                <ButtonsStyled style={{ backgroundColor: '#FFAB64'}} onClick={()=> navigate('/lotomania')}>LOTOMANIA</ButtonsStyled>
                <ButtonsStyled style={{ backgroundColor: '#5AAD7D'}} onClick={()=> navigate('/timemania')}>TIMEMANIA</ButtonsStyled>
                <ButtonsStyled style={{ backgroundColor: '#BFAF83'}} onClick={()=> navigate('/diadesorte')}>DIA DE SORTE</ButtonsStyled>
            </ButtonsDiv>
        </BodyHome>
    )
}