import React from "react";
import styled from "styled-components";
import uga from '../../../uga.png'

const CardBody = styled.div`
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

function RelatedCard(){
    return(
        <CardBody>
            <img src={uga}/>                
        
            <h4>Você não pode fugir (2022)</h4>
           
        </CardBody>
    )
}

export default RelatedCard