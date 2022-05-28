import React from "react";
import { ErrorBody, ErrorCard } from "./styled";
import ErrorIcon from "../../Images/error.png"

export default function NotFound(){
    return(
        <ErrorBody>
            <ErrorCard>
                <h2>Nenhum resultado Encontrado</h2>
                <h3>Tente Novamente</h3>
                <img src={ErrorIcon}/>
            </ErrorCard>            
        </ErrorBody>
    )
}