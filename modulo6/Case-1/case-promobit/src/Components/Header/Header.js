import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const HeaderBody = styled.div`
background-color: coral;
width: 100%;
>a{
    cursor: pointer;
    font-size: 35px;
    padding: 15px;
    text-decoration: none;
    color: black;
}
`
function Header () {    
    return(
        <HeaderBody>
            <a href="/">LMDB</a>
        </HeaderBody>
    )
}
export default Header