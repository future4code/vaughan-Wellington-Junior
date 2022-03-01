import axios from "axios"
import React, {useState} from "react"
import { useNavigate } from "react-router-dom"
import styled from "styled-components"
import useForm from '../../Hooks/useForm'
import useUnprotectedPage from "../../Hooks/useUnprotectedPage"
import {BASE_URL} from '../../routes/BASE_URL'
import { goToFeedPage } from '../../routes/coordinator'
import CircularProgress from '@material-ui/core/CircularProgress'
import { Reddit } from "@material-ui/icons"


const LoginBody = styled.div`
display: flex;
background-color: white;
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
width: 80vw;
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

const LoginForm = styled.form`
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

const LoginPage = ({ setRightButtonText }) => {

    useUnprotectedPage()

    const [form, onChange, clear] = useForm({email: "", password: ""})
    const naviHistory = useNavigate()
    const [isLoading, setIsLoading] = useState( false )

    const onSubmitForm = (event) => {
        event.preventDefault()
        login(naviHistory, setRightButtonText)
    }

    const login = (history, setRightButtonText) => {
        setIsLoading(true)
        axios.post(`${BASE_URL}/users/login`, form)
        .then((res) => {
            localStorage.setItem("token", res.data.token)
            clear()
            setIsLoading(false)
            goToFeedPage(history)
            setRightButtonText("Logout")            
        })
        .catch((err) => {
            setIsLoading(true)
            alert("Houve um erro ao tentar fazer Login, tente novamente")
        })            
    }
    return (
        <LoginBody>
            <InputContainer>
            
            <Logo>
            <Reddit style={{fontSize:'85px', color: '#ff6314',marginRight:'10px'}}/> <p>LabEddit</p>
            </Logo>                
            
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
                    >{isLoading ? <CircularProgress color={"inherit"} size={24}/> : "Entrar"}
                    </button>

                </LoginForm>

                   <div>
                       <p>Não possui conta? <a href="register">Cadastre-se!</a></p>
                   </div>

            </InputContainer>
        </LoginBody>
    )
}

export default LoginPage