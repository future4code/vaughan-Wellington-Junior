import axios from "axios";
import React, { useEffect, useState } from "react";
import Loading from "../../Loading/Loading";
import PageChangerButton from "../../PageChangerButton/PageChangerButton";
import { ConcursoDiv, LoterryFooter, LoteryBody, LoteryHeader, LoteryNumber, LoteryResultDiv, LoteryTitle, MainBody, SelectStyled } from "./styled";


export default function ScreenQuina( {arrayLoterias} ){
  
  const [concurso, setConcurso]=useState({})

  const [isLoading, setIsLoading]=useState(false)

  const getLoteriaResultados = async () =>{
    setIsLoading(true)
    const response = await axios(`https://brainn-api-loterias.herokuapp.com/api/v1/concursos/${arrayLoterias}`)
      setConcurso(response.data)
      setIsLoading(false)
  }

  useEffect(()=>{
    getLoteriaResultados()
  },[])

  const LoteriaRender = concurso && concurso.data != null ?  <MainBody>
  <LoteryHeader>

    <PageChangerButton/>

    <LoteryTitle>QUINA</LoteryTitle>

    <ConcursoDiv>
        <p>CONCURSO <br/>
        <b>{concurso.id} - {`${concurso.data.substring(8,10)}/${concurso.data.substring(5,7)}/${concurso.data.substring(0,4)}`}</b></p>
    </ConcursoDiv>

  </LoteryHeader>

  <LoteryBody>

    <LoteryResultDiv>
      {concurso.numeros.map((data) => {return <LoteryNumber>{data}</LoteryNumber>})}
    </LoteryResultDiv>

    <LoterryFooter>Este sorteio é meramente ilustrativo e não possui nenhuma ligação com a CAIXA</LoterryFooter>

  </LoteryBody>

</MainBody> : <Loading/>

  return(<div>
      
      {LoteriaRender}
        

  </div>
      )
}