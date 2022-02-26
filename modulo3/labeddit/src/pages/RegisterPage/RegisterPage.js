import React from "react"
import styled from "styled-components"
import { useNavigate } from "react-router-dom"
import useForm from '../../Hooks/useForm'
import useUnprotectedPage from "../../Hooks/useUnprotectedPage"
import axios from "axios"
import { BASE_URL } from "../../routes/BASE_URL"
import { goToFeedPage } from "../../routes/coordinator"

const RegisterBody = styled.div`
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

const RegisterForm = styled.form`
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

const RegisterPage = ({ setRightButtonText }) => {
    
    useUnprotectedPage()

    const history = useNavigate()
    const [form, onChange, clear] = useForm({username: "",email: "", password: ""})

    const signUp = (history, setRightButtonText) => {
        axios.post(`${BASE_URL}/users/signup`, form)
        .then((res) => {
            localStorage.setItem("tokem", res.data.token)
            clear()
            goToFeedPage(history)
            setRightButtonText("Logout")
        })
        .catch((err) => alert(err.response.data.message))
    }

    const onSubmitForm = (event) => {
        event.preventDefault()
        signUp(history)
    }

    return (
        <RegisterBody>
            <InputContainer>
                <RegisterForm onSubmit={onSubmitForm}>
                    <input
                    name={"username"}
                    value={form.username}
                    onChange={onChange}
                    placeholder={"Nome de Usuário"}
                    required
                    />
                    
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
                    >Registrar</button>

                </RegisterForm>
            </InputContainer>
        </RegisterBody>
    )
}

export default RegisterPage