import React, { useState } from "react";
import { SelectStyled } from "./styled";
import { useNavigate } from "react-router-dom";

export default function PageChangerButton (){

    const navigate = useNavigate()

    const onChageSelect = event =>{
        navigate(event.target.value)
    }
    

    return(
    <div>
        <SelectStyled onChange={onChageSelect}>
            <option>Ver Loteria</option>
            <option value="/megasena">Mega-Sena</option>
            <option value="/quina">Quina</option>
            <option value="/lotofacil">Lotofacil</option>
            <option value="/lotomania">Lotomania</option>
            <option value="/timemania">Timemania</option>
            <option value="/diadesorte">Dia de Sorte</option>
      </SelectStyled>
    </div>

    )
}