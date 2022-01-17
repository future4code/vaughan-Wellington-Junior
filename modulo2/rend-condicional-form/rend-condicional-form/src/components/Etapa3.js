import React from "react";
import styled from "styled-components";

const Etapa3Container = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
margin-bottom: 20px;
`

export default  class Etapa3 extends React.Component {
    render() {
        return (
            <Etapa3Container>
                <h2>ETAPA 3 - INFORMAÇÕES GERAIS DE ENSINO</h2>
                <p>5. Por que você não terminou um curso de graduação?</p>
                <input/>
                <p>6. Você fez algum curso complementar?</p>
                <select></select>
            </Etapa3Container>
        )
    }
}
