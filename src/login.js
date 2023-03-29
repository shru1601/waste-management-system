import React from "react"
import { CButton, CCol, CFormInput } from "@coreui/react"
import Layout from "./layout/layout"
const Login = () => {
    return(
        <> <> <> 
        <CCol md={6}>
            <CFormInput type="email" id="inputEmail4" label="Email" />
        </CCol>
        <CCol md={6}>
                <CFormInput type="password" id="inputPassword4" label="Password" />
            </CCol>
             </>  </>
              <CCol xs={10}>
                <CButton type="submit">Log In </CButton>
            </CCol> </>
    )
}
export default Login
