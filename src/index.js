import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import routes from './Route/route';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, HashRouter, Route, RouterProvider, Routes } from "react-router-dom";
import '@coreui/coreui/dist/css/coreui.min.css'
import router from "./Route/route";

const root = ReactDOM.createRoot(document.getElementById("root"));



console.log('routes',routes)
root.render(
  <React.StrictMode>
  <RouterProvider router={router} />
</React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();