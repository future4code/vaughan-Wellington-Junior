import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const HeaderBody = styled.div`
background-color: #151515;
display: flex;
align-items: center;
min-width: 98vw;
width: 100%;
>button{
    cursor: pointer;
    font-family: 'Staatliches', cursive;
    font-size: 22px;
    padding: 1px 5px;
    border-radius: 5px;
    margin-left: 20px;
    background: #deb522;
    border: none;
    color: black;
    margin-top: 10px;
    margin-bottom: 10px;
}

@media screen and (max-width: 500px){
    justify-content: center;
    width: 100%;
    min-width: none;
>button{

}
    
}
`
function Header () {
    
    const navigate = useNavigate()

    function goHome(){
        navigate('/')
    }

    return(
        <HeaderBody>
            <button onClick={goHome}>IMDb</button>
        </HeaderBody>
    )
}
export default Header