import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import FeedPage from "../pages/FeedPage/FeedPage";
import LoginPage from "../pages/LoginPage/LoginPage";
import PostPage from "../pages/PostPage/PostPage";
import RegisterPage from "../pages/RegisterPage/RegisterPage";

const Router = ({setRightButtonText}) => {

    return(
            <Routes>
                <Route path="/" element={<FeedPage/>}/>
                <Route path="/login" element={<LoginPage/>} setRightButtonText={setRightButtonText}/>
                <Route path="/register" element={<RegisterPage/>} setRightButtonText={setRightButtonText}/>
                <Route path="/post/:id" element={<PostPage/>}/>
                <Route path="*" element={<ErrorPage/>}/>
            </Routes>
    )
}

export default Router