import React from "react";
import { CCol, CContainer, CRow } from "@coreui/react";
import AppSidebar from "../appsidebar";
import Header from "../users/header";

const Layout = ({ children }) => {
  return (
    <div>
      <div>
          <CRow>
            <CCol sm="auto">
              <AppSidebar />
            </CCol>
            <CCol sm="auto">
              {" "}
              <div>
                <Header />
              </div>
              <div>
                {children}
              </div>
            </CCol>
          </CRow>
      </div>
      <div></div>
    </div>
  );
};

export default Layout;
