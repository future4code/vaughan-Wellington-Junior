import React from "react";
import styled from "styled-components";
import RelatedCard from "./RelatedCard";

const RelatedMoviesBody = styled.div`
display: flex;
flex-direction: column;
width: 80%;
padding: 20px;
`
const RelatedGrid = styled.div`
display: grid;
grid-template-columns: repeat(5, 1fr);
grid-row-gap: 20px;
grid-column-gap: 20px;
`

function RelatedMovies(){
    return(
    <RelatedMoviesBody>
        <h2> Filmes Semelhantes</h2>

        <RelatedGrid>
            <RelatedCard/>
            <RelatedCard/>
            <RelatedCard/>
            <RelatedCard/>            
        </RelatedGrid>

    </RelatedMoviesBody>
    )
}
export default RelatedMovies