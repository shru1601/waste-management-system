// import React, { useState, useCallback, useMemo } from "react";
import React from 'react';

import logo from './logo.svg';
import './App.css';
import { Login } from "./Login";
import { Register } from "./Register";
import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {
  
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Login />}></Route>
        <Route path="register" element={<Register />} />
        <Route path="login" element={<Login />} />
       
        </Routes>
        </BrowserRouter>
        );
  }

  export default App;