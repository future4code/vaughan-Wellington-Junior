import styled from "styled-components";

export const MainBody = styled.div`
display: flex;
min-height: 100vh;
min-width: 100vw;
background-color: #FFAB64;
`

export const LoteryHeader = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
padding: 1em 5em;
width: 35%;
color: white;
`

export const LoteryBody = styled.div`
background-color: #EFEFEF;
display: flex;
flex-direction: column;
width: 100%; 
align-items: center;
justify-content: center;
border-top-left-radius: 40em;
`

export const ConcursoDiv = styled.div`
font-family: 'Montserrat';
position: absolute;
bottom: 1em;
>p{
    font-size: 0.7em;
}
>p>b{
    font-size: 1.6em;
}
`

export const LoteryResultDiv = styled.div`
flex-wrap: wrap;
align-items: center;
justify-content: center;
display: flex;
`

export const LoteryNumber = styled.p`
font-family: 'Montserrat';
font-weight: 800;
font-size: 1.2em;
padding: 1.1em;
margin: 1em;
border-radius: 100%;
background-color: white;
`

export const LoterryFooter = styled.p`
position: absolute;
bottom: 1em;
font-family: 'Montserrat';
font-weight: 300;
font-size: 0.9em;
`

export const LoteryTitle = styled.p`
font-family: 'Montserrat';
font-weight: 700;
font-size: 1.8em;
`
