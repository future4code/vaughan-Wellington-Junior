import React from 'react';
import Etapa1 from './components/Etapa1';
import Etapa2 from './components/Etapa2';
import Etapa3 from './components/Etapa3';
import Final from './components/Final';
import styled from "styled-components";

const AppContainer = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`


export default  class App extends React.Component{
  
  state = {
    etapa: 1,
  }

  render() {
    const renderizarEtapa = () => {
      if(this.state.etapa === 1) {
        return <Etapa1/>
      } else if(this.state.etapa === 2) {
        return <Etapa2/>
      } else if(this.state.etapa === 3) {
        return <Etapa3/>
      } else if(this.state.etapa === 4) {
        return <Final/>
      }      
    }

    const proximaEtapa = () => {
      this.setState({etapa:1 + this.state.etapa} )
    }

    return(
      <AppContainer>
        {renderizarEtapa()}
        <button hidden={this.state.etapa >= 4} onClick={proximaEtapa}>Próxima Etapa</button>
      </AppContainer>
      
    )
  }
}