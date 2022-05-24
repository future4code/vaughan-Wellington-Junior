import styled from "styled-components"

export const DetailsBody = styled.div`
min-height: 100vh;
display: flex;
flex-direction: column;
align-items: center;
`
export const MovieData = styled.div`
width: 100%;
padding-top: 30px;
display: flex;
background-color: brown;
justify-content: center;
`
export const MovieText = styled.div`
display: flex;
flex-direction: column;
width: 60%;
`
export const MoviePoster = styled.img`
width: 250px;
height: 400px;
object-fit: cover;
padding: 25px;
`
export const MovieHeader = styled.div`
padding: 25px;
>h2{
margin: 0;
}
>h4{
margin: 0;
}
`
export const MovieScore = styled.div`

padding: 0 25px;
>h4{
    margin: 0;
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
`
export const CastBody = styled.div`
display: flex;
flex-direction: column;
width: 80%;
padding: 20px;
`

export const CastGrid = styled.div`
display: grid;
grid-template-columns: repeat(5, 1fr);
grid-row-gap: 10px;
grid-column-gap: 10px;
`

export const CastCard = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
text-align: center;
background-color: darkgoldenrod;
padding-top: 15px;
padding-bottom: 15px;
>img{
    width: 170px;
    height: 240px;
    object-fit: cover;
    margin-bottom: 8px;
}
>div>h4{
margin: 0;
margin-bottom: 3px;
}
>div>p{
margin: 0;
}
`
export const RelatedMovies = styled.div`
display: flex;
flex-direction: column;
width: 80%;
padding: 20px;
`
export const RelatedGrid = styled.div`
display: grid;
grid-template-columns: repeat(5, 1fr);
grid-row-gap: 20px;
grid-column-gap: 20px;
`
export const RelatedCard = styled.div`
cursor: pointer;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
text-align: center;
background-color: darkgoldenrod;
padding-top: 15px;
padding-bottom: 15px;
>img{
    width: 170px;
    height: 240px;
    object-fit: cover;
    margin-bottom: 8px;
}
>h4{
margin: 0;
margin-bottom: 3px;
}
`
