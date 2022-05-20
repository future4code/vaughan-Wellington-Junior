import React from "react";
import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom";
import styled from "styled-components";
import Header from "./Components/Header/Header";
import Home from "./Pages/Home/Home";
import MovieDetails from "./Pages/MovieDetails/MovieDetails";

const Body = styled.div`
background-color: aliceblue;
min-height: 100vh;
display: flex;
flex-direction: column;
align-items: center;
`

function App() {
  return (
    <Body>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/details" element={<MovieDetails/>}/>
        </Routes>
    </Body>
  );
}

export default App;
