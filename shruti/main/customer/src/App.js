// import logo from './logo.svg';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import { Home } from "./Home";
import React from 'react';


function App() {
  return (
    <BrowserRouter>
    <Routes>
    <Route index element={<Home/>}/>

    </Routes>
    </BrowserRouter>
  );
}

export default App;
