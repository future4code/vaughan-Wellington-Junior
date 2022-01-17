import React from "react";
import styled from "styled-components";

const Etapa1Container = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
margin-bottom: 20px;
`

export default  class Etapa1 extends React.Component {
    render() {
        
        const arrayEscolar = [
            {escolaridade:'Ensino médio incompleto'},
            {escolaridade:'Ensino médio completo'},
            {escolaridade:'Ensino superior incompleto'},
            {escolaridade:'Ensino superior completo'}
        ]

        return (
            <Etapa1Container>
                <h2>ETAPA 1 - DADOS GERAIS</h2>
                <p>1. Qual o seu nome</p>
                <input/>
                <p>2. Qual sua idade</p>
                <input/>
                <p>3. Qual seu Email</p>
                <input/>
                <p>4. Qual sua Escolaridade</p>
                <select></select>             
            </Etapa1Container>
        )
    }
}

