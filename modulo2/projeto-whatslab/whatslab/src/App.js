import React from 'react';
import MsgInput from './components/msgInput/msgInput';
import styled from 'styled-components';

const MainContainer = styled.div`
display: flex;
align-items: center;
justify-content: center;
margin-right: 400px;
margin-left: 400px;
border: 1px solid black;
`


class App extends React.Component {
  render(){
    return(
      <MainContainer>
        <MsgInput/>
      </MainContainer>
    )
  }

}

export default App;
