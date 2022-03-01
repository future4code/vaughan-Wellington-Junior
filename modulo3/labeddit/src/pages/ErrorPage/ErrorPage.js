import React from "react";
import catGif from '../../media/cat.gif'
import styled from "styled-components";

const Body = styled.div`
    display: flex;    
    font-family: sans-serif;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 94vh;
    >p{
        margin-top: 20px;
        font-size: larger;
    }
    >div{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }
    >div>p{        
        font-size: 100px;
        color: gray;
        margin: 0;
    }
    >div>img{
        height: 300px;
        width: auto;
    }
`

const ErrorPage = () => {
    return(
        <Body>
            <div><p>404</p>
            <img src={catGif} alt="erro :c"/>
            </div>
            <p>Não foi possível localizar a página :(</p>
        </Body>
    )
}

export default ErrorPage