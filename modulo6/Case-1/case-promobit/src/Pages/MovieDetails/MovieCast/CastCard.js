import React from "react";
import styled from "styled-components";
import uga from '../../../uga.png'

const CastCardBody = styled.div`
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

function CastCard(){
    return(
        <CastCardBody>
                <img src={uga}/>
                
                <div>
                    <h4>Uga Buga</h4>
                    <p>Udyr</p>
                </div>            
            </CastCardBody>
    )
}

export default CastCard