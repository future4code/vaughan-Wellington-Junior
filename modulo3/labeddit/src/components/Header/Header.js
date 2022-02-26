import React from "react"
import styled from "styled-components"
import { useNavigate } from "react-router-dom"
import { goToFeedPage, goToLogin } from "../../routes/coordinator"

const Head = styled.div`
    padding: 15px;
    background-color: salmon;
    display: flex;
    justify-content: space-between;`

const Header = ({rightButtonText, setRightButtonText}) => {    
    const token = localStorage.getItem("token")
    let history = useNavigate();

    const logout = () => {
        localStorage.removeItem("token")
    }

    const rightButtonAction = () =>{
        if (token){
            logout()
            setRightButtonText("Login")
            goToLogin(history)
        } else {
            goToLogin(history)
        }
    }
    return (
        <Head>
            <button onClick={() => goToFeedPage()}>LabEddit</button>
            <button onClick={rightButtonAction}>{rightButtonText}</button>
        </Head>
    )
}

export default Header