import React from 'react';
import styled from 'styled-components'
import Post from './components/Post/Post';

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`
const PostInput = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;  
  margin: 10px
`

class App extends React.Component {
  state = {

    posts: [
      {
        nomeUsuario:"paulinha",
        fotoUsuario:"https://picsum.photos/50/50",
        fotoPost:"https://picsum.photos/200/150"
      },
      {
        nomeUsuario:"joaozinho",
        fotoUsuario:"https://picsum.photos/50/51",
        fotoPost:"https://picsum.photos/200/151"
      },
      {
        nomeUsuario:"mariazinha",
        fotoUsuario:"https://picsum.photos/50/52",
        fotoPost:"https://picsum.photos/200/152"
      }
    ],

    valorInputNome:""
  };

  adicionarPost = () => {

    const novoUser = {
      nomeUsuario: this.state.valorInputNome,
      fotoUsuario:"https://picsum.photos/50/53",
      fotoPost:"https://picsum.photos/200/153"
    }

    const novoPost = [...this.state.posts, novoUser]

    this.setState({posts: novoPost});
    this.setState({valorInputNome: ""})
    
  };

  onChangeInputNome = (event) => {
    this.setState({valorInputNome: event.target.value})
  };

  render() {
    const listaComponentes = this.state.posts.map((pessoa)=> {
      return (
        <Post
          nomeUsuario = {pessoa.nomeUsuario}
          fotoUsuario = {pessoa.fotoUsuario}
          fotoPost = {pessoa.fotoPost}
        />
      )
    });

    return (
       <MainContainer>
         <PostInput>
              <input
                value={this.state.valorInputNome}
                onChange={this.onChangeInputNome}
                placeholder={"Nome"}
                />
                <button onClick={this.adicionarPost}>Postar</button>
         </PostInput>

        {listaComponentes}        
      </MainContainer>
    );
  }
}

export default App;
