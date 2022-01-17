import React from "react";
import styled from "styled-components";

const FinalContainer = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`


export default  class Final extends React.Component {
    render() {
        return (
            <FinalContainer>
                <h2>O FORMULÁRIO ACABOU</h2>
                <p>Muito obrigado por participar! Entraremos em contato!</p>
            </FinalContainer>
        )
    }
}