import React from "react";
import {Route, Routes } from "react-router-dom";
import styled from "styled-components";
import Error from "./Pages/Error/Error";
import Home from "./Pages/Home/Home";
import MovieDetails from "./Pages/MovieDetails/MovieDetails";

const Body = styled.div`
background-color: black;
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
          <Route path="/movie_info/:id" element={<MovieDetails/>}/>
          <Route path="*" element={<Error/>}/>
        </Routes>
    </Body>
  );
}

export default App;
