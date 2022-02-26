import axios from "axios"
import React from "react"
import { useNavigate } from "react-router-dom"
import styled from "styled-components"
import useForm from '../../Hooks/useForm'
import useUnprotectedPage from "../../Hooks/useUnprotectedPage"
import {BASE_URL} from '../../routes/BASE_URL'
import { goToFeedPage } from '../../routes/coordinator'


const LoginBody = styled.div`
display: flex;
background-color: aqua;
flex-direction: column;
justify-content: center;
align-items: center;
width: 100vw;
height: 94.5vh;
`

const InputContainer = styled.div`
display: flex;
flex-direction: column;
width: 80vw;
max-width: 450px;
align-items: center;
`

const LoginForm = styled.form`
display: flex;
flex-direction: column;
width: 80vw;
max-width: 450px;
align-items: center;
    >input{
        margin-bottom: 10px;
        width: 92%;
        padding: 15px;
    }
    >button{
        margin-bottom: 10px;
        width: 100%;
        padding: 10px;
    }
`

const LoginPage = ({ setRightButtonText }) => {

    useUnprotectedPage()

    const [form, onChange, clear] = useForm({email: "", password: ""})
    const naviHistory = useNavigate()

    const onSubmitForm = (event) => {
        event.preventDefault()
        login(naviHistory, setRightButtonText)
    }

    const login = (history, setRightButtonText) => {
        axios.post(`${BASE_URL}/users/login`, form)
        .then((res) => {
            localStorage.setItem("token", res.data.token)
            clear()
            goToFeedPage(history)
            setRightButtonText("Logout")            
        })
        .catch((err) => alert(err.response.data.message))
    }
    return (
        <LoginBody>
            <InputContainer>
                <LoginForm onSubmit={onSubmitForm}>
                    
                    <input
                    name={"email"}
                    value={form.email}
                    onChange={onChange}
                    placeholder={"E-mail"}
                    required
                    type={"email"}
                    />

                    <input
                    name={"password"}
                    value={form.password}
                    onChange={onChange}
                    placeholder={"Senha"}
                    required
                    type={"password"}
                    />

                    <button
                    type={"submit"}
                    >Entrar</button>

                </LoginForm>

                   <div>
                       <p>Não possui conta? <a href="register">Cadastre-se!</a></p>
                   </div>

            </InputContainer>
        </LoginBody>
    )
}

export default LoginPage