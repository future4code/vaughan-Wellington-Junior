import React, { useEffect, useState } from "react";
import axios from "axios";
import { MainBody } from "./styled";
import ScreenMegaSena from "./Components/Pages/ScreenMegaSena/ScreenMegaSena";
import ScreenQuina from "./Components/Pages/ScreenQuina/ScreenQuina";
import ScreenLotofacil from "./Components/Pages/ScreenLotofacil/ScreenLotofacil";
import ScreenLotomania from "./Components/Pages/ScreenLotomania/ScreenLotomania";
import ScreenTimemania from "./Components/Pages/ScreenTimemania/ScreenTimemania";
import ScreenDiadesorte from "./Components/Pages/ScreenDiadesorte/ScreenDiadesorte";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Components/Pages/Home/Home";
import ErrorPage from "./Components/Pages/ErrorPage/ErrorPage";


function App() {
  const [loteriasConcursos, setLoteriasConcursos] = useState([])
  
  useEffect(()=>{
    const axiosConcursos = async () => {
      try {
        const reponse = await axios(`https://brainn-api-loterias.herokuapp.com/api/v1/loterias-concursos`)
        setLoteriasConcursos(reponse.data)
      }
      catch{
        console.log('erro')
      }
    }
    axiosConcursos();
  },[])

  function getId (n){
    let filterLotteryID = loteriasConcursos.filter(lotId => lotId.loteriaId === n)
    let mapLotteryId = filterLotteryID.map(lotId => lotId.concursoId)
    let lotteryId =  mapLotteryId.toString()
    return lotteryId
  }

  return (
    <MainBody>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/megasena" element={<ScreenMegaSena arrayLoterias={getId(0)}/>}/>
          <Route path="/quina" element={<ScreenQuina arrayLoterias={getId(1)}/>}/>
          <Route path="/lotofacil" element={<ScreenLotofacil arrayLoterias={getId(2)}/>}/>
          <Route path="/lotomania" element={<ScreenLotomania arrayLoterias={getId(3)}/>}/>
          <Route path="/timemania" element={<ScreenTimemania arrayLoterias={getId(4)}/>}/>
          <Route path="/diadesorte" element={<ScreenDiadesorte arrayLoterias={getId(5)}/>}/>
          <Route path="*" element={<ErrorPage/>}/>
        </Routes>
      </BrowserRouter>
    </MainBody>
  );
}

export default App;
