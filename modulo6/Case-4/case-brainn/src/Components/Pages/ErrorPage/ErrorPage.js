import React from "react";
import { useNavigate } from "react-router-dom";
import { BodyHome, ButtonsDiv, ButtonsStyled, HomeTitle } from "./styled";

export default function ErrorPage(){

    const navigate = useNavigate()
    
    return(
        <BodyHome>
            <HomeTitle>Página não encontrada</HomeTitle>
            <ButtonsDiv>
                <ButtonsStyled style={{ backgroundColor: '#6BEFA3'}} onClick={()=> navigate('/')}>Retornar</ButtonsStyled>
            </ButtonsDiv>
        </BodyHome>
    )
}