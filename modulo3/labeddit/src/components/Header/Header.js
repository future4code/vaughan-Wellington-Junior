import React from "react"
import styled from "styled-components"
import { useNavigate } from "react-router-dom"
import { goToFeedPage, goToLogin } from "../../routes/coordinator"
import { Reddit } from "@material-ui/icons"

const Head = styled.div`
    background-color: #ff6314;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-family: sans-serif;
    >div{
        cursor: pointer;
        display: flex;
        align-items: center;
        margin-left: 10px;
    }
    >div>p{
        color: white;
        font-size: 25px;
    }
    >p{ 
        cursor: pointer;
        margin-right: 30px;
        color: white;
    }   
`

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
            <div>
                <Reddit style={{fontSize:'35px', color: 'white',marginRight:'10px'}}/>
                <p onClick={()=> goToFeedPage(history)}>LabEddit</p>
            </div>            
            <p onClick={rightButtonAction}>{rightButtonText}</p>
        </Head>
    )
}

export default Header