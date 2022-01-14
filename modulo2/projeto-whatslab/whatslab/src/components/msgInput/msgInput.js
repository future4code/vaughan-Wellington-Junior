import react from "react";
import React from "react";
import styled from "styled-components";

const BodyText = styled.div`   
    display: flex;
    flex-direction: column;
    justify-content: left;
    position: relative;
    color: black;
    width: 100%;
    height:100vh
`

const InputText = styled.div`
    display: flex;
    position: absolute;
    bottom: 0px;
    margin-right: auto;
    margin-left: auto;
    padding: 2px;
`
const TextPrint = styled.div`
    margin-left: 10px;
`

class MsgInput extends react.Component{

    state = {
        
        mensagens: [
        {
            user:"",
            mensagem:""
        }
        ],
        
        valorUserInput:"",
        valorMsgInput:""
    };

    adicionarMsg = () => {
        const novaMsg = {
            user:`${this.state.valorUserInput}:`,
            mensagem:`${this.state.valorMsgInput}`
        };

        const novaMsgm = [...this.state.mensagens, novaMsg];
        this.setState({ mensagens: novaMsgm});
        this.setState({ valorMsgInput:"" })         
    };

    onChangeUserInput = (event) => {
        this.setState({ valorUserInput: event.target.value })
    };

    onChangeMsgInput = (event) => {
        this.setState({ valorMsgInput: event.target.value })
    };

    render(){
        const apareceMensagens = this.state.mensagens.map((item) => {
            return <div>
                <p><strong>{item.user}</strong> {item.mensagem}</p>
            </div>
        })
    
    return (
        <BodyText>
            <TextPrint>
            {apareceMensagens}
            </TextPrint>
            

            <InputText>
                <input
                size="10"
                value={this.state.valorUserInput}
                onChange={this.onChangeUserInput}
                placeholder='Usuário'/>
            
                <input
                size="60"
                value={this.state.valorMsgInput}
                onChange={this.onChangeMsgInput}
                placeholder='Digite sua mensagem...'/>
            
                <button onClick={this.adicionarMsg}>Enviar</button>
            
            </InputText>
        </BodyText>
    )
    }

}

export default MsgInput