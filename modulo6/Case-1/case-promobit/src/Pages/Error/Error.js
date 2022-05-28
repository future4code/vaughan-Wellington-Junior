import React from "react";
import Header from "../../Components/Header/Header";
import ErrorIcon from "../../Images/error.png"
import { ErrorBody, ErrorCard } from "./styled";

export default function Error(){
    return(
        <ErrorBody>
            <Header/>
            <ErrorCard>
                <h1>Página não encontrada</h1>
                <img src={ErrorIcon}/>
            </ErrorCard>            
        </ErrorBody>
    )
}