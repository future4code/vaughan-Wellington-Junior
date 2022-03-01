import React, {useState} from "react"
import styled from "styled-components"
import { useNavigate } from "react-router-dom"
import useForm from '../../Hooks/useForm'
import useUnprotectedPage from "../../Hooks/useUnprotectedPage"
import axios from "axios"
import { BASE_URL } from "../../routes/BASE_URL"
import { goToFeedPage } from "../../routes/coordinator"
import CircularProgress from '@material-ui/core/CircularProgress'
import { Reddit } from "@material-ui/icons"

const RegisterBody = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
font-family: sans-serif;
width: 100vw;
height: 93vh;
`

const InputContainer = styled.div`
display: flex;
flex-direction: column;
max-width: 450px;
align-items: center;
    >div>p>a{
        text-decoration: none;
        font-weight: bolder;
        color: rgb(0, 121, 211);
    }
    >div>p>a:hover{
        text-decoration: none;
        font-weight: bolder;
        color: rgb(0, 101, 211);
    }
`

const Logo = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
color: #ff6314;
>p{
    margin-top: -5px;
    font-size: 40px;
    font-weight: 600;
}
`

const RegisterForm = styled.form`
display: flex;
flex-direction: column;
width: 80vw;
max-width: 450px;
align-items: center;
>input{
        margin-bottom: 10px;
        width: 90%;
        padding: 15px; 
        border: 1px solid rgba(0,0,0,.1);
        border-radius: 8px;
    }
    >button{
        cursor: pointer;
        margin-bottom: 10px;
        color: white;
        border: none;
        background-color: rgb(0, 121, 211);
        font-size: 18px;
        width: 97%;
        padding: 15px;
        border-radius: 30px;
    }
    >button:hover{
        background-color: rgb(0, 141, 211);
    }
`

const RegisterPage = ({ setRightButtonText }) => {
    
    useUnprotectedPage()

    const history = useNavigate()
    const [form, onChange, clear] = useForm({username: "",email: "", password: ""})    
    const [isLoading, setIsLoading] = useState( false )

    const signUp = (history, setRightButtonText) => {
        setIsLoading(true)
        axios.post(`${BASE_URL}/users/signup`, form)
        .then((res) => {
            localStorage.setItem("tokem", res.data.token)
            clear()
            setIsLoading(false)
            goToFeedPage(history)
            setRightButtonText("Logout")
        })
        .catch((err) => {
            setIsLoading(false)
            alert("Houve um erro ao tentar fazer Registro, tente novamente")})
    }

    const onSubmitForm = (event) => {
        event.preventDefault()
        signUp(history)
    }

    return (
        <RegisterBody>
            <Logo>
            <Reddit style={{fontSize:'85px', color: '#ff6314',marginRight:'10px'}}/> <p>LabEddit</p>
            </Logo> 

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
                    >{isLoading ? <CircularProgress color={"inherit"} size={24}/> : "Registrar"}</button>

                </RegisterForm>

                    <div>
                       <p>Já possui conta? <a href="login">Entre já!</a></p>
                    </div>

            </InputContainer>
        </RegisterBody>
    )
}

export default RegisterPage