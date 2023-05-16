import React from "react";
import { createBrowserRouter } from "react-router-dom";
// import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Dashboard from "../Dashboard/dashboard";
import Homepage from "../homepage";
import Login from "../login";
import Registration from "../registration";
import CustomerList from "../users/customer";
import DeliveryAgent from "../users/deliveryagent";
import Order from "../users/order";

const Loading = () => <div className="pt-3 text-center">
      <div className="sk-spinner sk-spinner-pulse">loading...</div>
    </div>

const router = createBrowserRouter([
  
    {
      path: "/",
      element: <Dashboard />,
      errorElement: <Loading />,
    },
    {
      path: "/homepage",
      element: <Homepage />,
    },
    {
      path: "/Dashboard/dashboard",
      element: <Dashboard />,
    },
    
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/registration",
      element: <Registration />,
    },
    {
      path: "/users/customer",
      element: <CustomerList />,
    },
    {
      path: "/users/order",
      element: <Order />,
    },
  ]);

export default router

