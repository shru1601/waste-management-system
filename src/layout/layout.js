import React from "react";
import { CCol, CContainer, CRow } from "@coreui/react";
import AppSidebar from "../appsidebar";
import Header from "../users/header";
import Dashboard from "../Dashboard/dashboard";

const Layout = ({ children }) => {
  return (
    // <h1> hellooooo</h1>
    // <div style={{display:"flex"}}>
    //   <AppSidebar />
    //   <Header />
    //   <Dashboard />
    // </div>
    <div>
      <div>
        <Header />
      <div style={{display:"flex"}}>
        
        <AppSidebar />
        <CRow>
          {children}
        </CRow>
      </div>

      </div>
      <div>
        
      </div>
      <div></div>
    </div>
  );
};

export default Layout;
