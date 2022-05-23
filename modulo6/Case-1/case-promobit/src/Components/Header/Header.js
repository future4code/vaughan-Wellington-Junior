import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const HeaderBody = styled.div`
background-color: coral;
width: 100%;
`
function Header () {
    
    const navigate = useNavigate()

    function goHome(){
        navigate('/')
    }

    return(
        <HeaderBody>
            <button onClick={goHome}>LMDB</button>
        </HeaderBody>
    )
}
export default Header