import styled from "styled-components";

export const BodyHome = styled.div`
background: rgb(0,101,183);
background: linear-gradient(90deg, rgba(0,101,183,1) 35%, rgba(44,171,176,1) 100%);
min-width: 100vw;
max-height: 100vh;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
`

export const HomeTitle = styled.p`
font-family: 'Montserrat';
color: white;
font-size: 2em;
font-weight: 700;
`

export const ButtonsDiv = styled.div`
display: flex;
flex-direction: column;
flex-wrap: wrap;
width: 30vw;
`

export const ButtonsStyled = styled.button`
cursor:pointer;
font-family: 'Montserrat';
border: none;
padding:  0.8em 1.8em;
margin: 0.5em;
border-radius: 0.5em;
font-size: 1.3em;
font-weight: 700;
color: white;
:hover{
    box-shadow: 0px 1px 9px black;
}
`