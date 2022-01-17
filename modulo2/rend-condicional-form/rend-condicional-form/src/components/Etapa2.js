import React from "react";
import styled from "styled-components";

const Etapa2Container = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
margin-bottom: 20px;
`

export default  class Etapa2 extends React.Component {
    render() {
        return (
            <Etapa2Container>
                 <h2>ETAPA 2 - Informações do Ensino Superior</h2>
                <p>5. Qual o curso</p>
                <input/>
                <p>6. Qual a unidade de ensino?</p>
                <input/>
            </Etapa2Container>
        )
    }
}
