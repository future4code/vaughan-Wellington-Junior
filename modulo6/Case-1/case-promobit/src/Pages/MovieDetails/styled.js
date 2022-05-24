import styled from "styled-components"

export const DetailsBody = styled.div`
min-height: 100vh;
background-color:#000000 ;
display: flex;
flex-direction: column;
align-items: center;
`
export const DetailsCard = styled.div`
display: flex;
flex-direction: column;
align-items: center;
`
export const MovieData = styled.div`
width: 100%;
padding-top: 30px;
display: flex;
background: linear-gradient(#2F2F2F, #080808);
justify-content: center;

@media screen and (max-width: 500px){
    align-items: center;
    justify-content: center;
    flex-direction:column ;
    text-align: center;
}

`
export const MovieText = styled.div`
display: flex;
flex-direction: column;
width: 60%;
@media screen and (max-width: 500px){
 align-items: center;
 width: 80%;
}
`
export const MoviePoster = styled.img`
width: 250px;
height: 400px;
object-fit: cover;
padding: 25px;
@media screen and (max-width: 500px){
    width: 150px;
    height: 225px;
}
`

export const NoImageError = styled.img`
width: 250px;
height: 400px;
object-fit: contain;
padding: 25px;
@media screen and (max-width: 500px){
    width: 150px;
    height: 225px;
}
`
export const MovieHeader = styled.div`
padding: 25px;
>h2{
margin: 0;
}
>h4{
margin: 0;
}

@media screen and (max-width: 500px){
    font-size: 15px;
}
`
export const MovieScore = styled.div`

padding: 0 25px;
>h4{
    margin: 0;
}
>h4>b{
    font-size: 22px;
}
`
export const MovieSynopsis = styled.div`
padding: 25px;
>h3{
margin: 0;
padding-bottom: 8px;
}
>p{
margin: 0;
}
@media screen and (max-width: 500px){
    text-align: center;
    width:100%;
    font-size: 13px;
}
`
export const CastBody = styled.div`
display: flex;
flex-direction: column;
width: 90%;
padding: 20px;
`

export const CastGrid = styled.div`
display: grid;
grid-template-columns: repeat(6, 1fr);
grid-row-gap: 10px;
grid-column-gap: 10px;
align-items: center;
justify-content: center;
@media screen and (max-width: 500px){
    grid-template-columns: repeat(3, 1fr);
    grid-row-gap: 10px;
    grid-column-gap: 10px;
}
`

export const CastCard = styled.div`
display: flex;
justify-self: center;
flex-direction: column;
align-items: center;
justify-content: center;
text-align: center;
background: linear-gradient( #080808, #000000);
padding-top: 15px;
padding-bottom: 15px;
>img{
    width: 150px;
    height: 225px;
    object-fit: fill;
    margin-bottom: 8px;
}
>div>h4{
margin: 0;
margin-bottom: 3px;
font-size: 15px;
}
>div>p{
margin: 0;
font-size: 14px;
}
@media screen and (max-width: 500px){
    padding: 10px;
    >img{
        width: 100px;
        height: 150px;
    }
    >div>h4{
        font-size: 13px;
    }
    >div>p{
        font-size: 12px;
    }
    
}
`
export const RelatedMovies = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
width: 90%;
padding: 20px;
`
export const RelatedGrid = styled.div`
display: grid;
grid-template-columns: repeat(6, 1fr);
grid-row-gap: 20px;
grid-column-gap: 20px;
align-items: center;
justify-content: center;
@media screen and (max-width: 500px){
    grid-template-columns: repeat(3, 1fr);
    grid-row-gap: 10px;
    grid-column-gap: 10px;  
}
`
export const RelatedCard = styled.div`
cursor: pointer;
display: flex;
flex-direction: column;
align-items: center;
justify-content: space-between;
text-align: center;
background: linear-gradient(#080808, #000000);
padding-top: 15px;
padding-bottom: 15px;
>img{
    width: 150px;
    height: 225px;
    object-fit: fill;
    margin-bottom: 8px;
}
>h4{
margin: 0;
margin-bottom: 3px;
font-size: 15px;
}
:hover{
background: linear-gradient(#2F2F2F, #080808);   
}
@media screen and (max-width: 500px){
    >img{
        width: 100px;
        height: 150px;
    }
    >h4{
        font-size: 11px;
    }    
}
`
