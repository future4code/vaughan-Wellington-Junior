import React from "react";
import axios from "axios";
import styled from "styled-components";

const CardUser = styled.div`
    display: flex;
    justify-content: space-between;
    border: 1px solid black;
    padding: 5px;
    margin: 5px;
    width: 250px;
`

export default class TelaListaUsuario extends React.Component{
    state = {
        usuarios: []
    }
    componentDidMount() {
        this.pegarUsuarios()
    }

    pegarUsuarios = () => {
        const url = "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users"
        axios.get(url, {
            headers: {
                Authorization: "chijo-paiva"
            }
        })
        .then((res) => {
            this.setState({usuarios: res.data})
        })
        .catch((err) => {
            alert("Ocorreu um erro, tente novamente")
        })
    }

    deletarUsuario = (id) => {
        const url = `https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${id}`
        axios.delete(url, {
            headers:{
                Authorization: "chijo-paiva"
            }
        })
        .then((res) => {
            alert("Usuário deletado com sucesso!")
            this.pegarUsuarios()
        })
        .catch((err) =>{
            alert("Erro ao deletar usuário")
        })
    }
        

    render(){

        const listaUsuarios = this.state.usuarios.map((user) => {
            return <CardUser key={user.id}>
                <span>{user.name}</span>
                <button onClick={() => this.deletarUsuario(user.id)}>Deletar</button>                
                </CardUser>
        })

        return(
            <div>
                <button onClick={this.props.irParaCadastro}>Ir para Cadastro</button>
                <h2>Lista de Usuários</h2>
                {listaUsuarios}
            </div>
        )
    }
}