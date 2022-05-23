import React from "react";
import styled from "styled-components";
import CastCard from "./CastCard";

const CastBody = styled.div`
display: flex;
flex-direction: column;
width: 80%;
padding: 20px;
`

const CastGrid = styled.div`
display: grid;
grid-template-columns: repeat(5, 1fr);
grid-row-gap: 20px;
grid-column-gap: 20px;
`


function MovieCast(){
    return(
    <CastBody>
        
        <h2>Elenco</h2>

        <CastGrid>
            <CastCard/>
            <CastCard/>
            <CastCard/>
            <CastCard/>
            <CastCard/>
        </CastGrid>
        
    </CastBody>
    )
}

export default MovieCast