import React from 'react';
import './App.css';
import { Main } from "./Main";
import { Register } from "./Register";
import { Login } from "./Login";


import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {
  return (
    <BrowserRouter>
    <Routes>
    <Route index element={<Main/>}/>
    <Route path="login" element={<Login />} />
    <Route path="register" element={<Register />} />


    </Routes>
    </BrowserRouter>
  );
}



export default App;
