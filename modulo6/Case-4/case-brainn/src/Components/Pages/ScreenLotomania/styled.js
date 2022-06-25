import styled from "styled-components";

export const MainBody = styled.div`
display: flex;
min-height: 100vh;
min-width: 100vw;
background-color: #FFAB64;
@media screen and (max-width: 700px){
flex-direction: column;
align-items: center;
justify-content: space-between;
min-height: 100vh;
}
`

export const LoteryHeader = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
padding: 1em 5em;
width: 35%;
color: white;
@media screen and (max-width: 700px){
    width: 100%;
    align-items: center;
    padding: 0em;
}
`

export const LoteryBody = styled.div`
background-color: #EFEFEF;
display: flex;
flex-direction: column;
width: 100%; 
align-items: center;
justify-content: center;
border-top-left-radius: 40em;
@media screen and (max-width: 700px){
    min-width: 100vw;
    min-height: 70vh;
    border-top-left-radius: 5em;
    justify-content: space-between;
    align-items: center;
}
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


@media screen and (max-width: 700px){
    position: relative;
    display:flex
    }
    >p{
        font-size: 0.7em;
    }
    >p>b{
        font-size: 1.3em;
    }
`

export const LoteryResultDiv = styled.div`
flex-wrap: wrap;
align-items: center;
justify-content: center;
width: 70%;
display: flex;
    @media screen and (max-width: 700px){
    margin-top: 2em;
    }
`

export const LoteryNumber = styled.p`
font-family: 'Montserrat';
font-weight: 800;
font-size: 1.2em;
padding: 1.1em;
margin: 0.7em;
border-radius: 100%;
background-color: white;
@media screen and (max-width: 700px){
    margin: 0.4em;
}

`

export const LoterryFooter = styled.p`
position: absolute;
bottom: 1em;
font-family: 'Montserrat';
font-weight: 300;
font-size: 0.9em;
text-align: center;
@media screen and (max-width: 700px){
position: relative;
}
`

export const LoteryTitle = styled.p`
font-family: 'Montserrat';
font-weight: 700;
font-size: 1.8em;
@media screen and (max-width: 700px){
    margin-top: 3em;
}
`
