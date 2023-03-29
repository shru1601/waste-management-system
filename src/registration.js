import React from "react"
import { CButton, CCol, CForm, CFormCheck, CFormInput, CFormSelect } from "@coreui/react"
const Registration = () => {
    return(
         
<CForm className="row g-3">
<CCol md={6}>
    <CFormInput type="firstname" id="inputfirstname" label="FirstName" />
  </CCol>
  <CCol md={6}>
    <CFormInput type="lastname" id="inputlastname" label="LastName" />
  </CCol>
  <CCol md={6}>
    <CFormInput type="email" id="inputEmail4" label="Email" />
  </CCol>
  <CCol md={6}>
    <CFormInput type="password" id="inputPassword4" label="Password" />
  </CCol>
  <CCol xs={12}>
    <CFormInput id="inputAddress" label="Address" placeholder="1234 Main St"/>
  </CCol>
  <CCol md={6}>
    <CFormInput id="inputCity" label="City"/>
  </CCol>
  <CCol md={4}>
    <CFormSelect id="inputState" label="State">
      <option>Choose...</option>
      <option>Rajasthan</option>
      <option>Maharashtra</option>

    </CFormSelect>
  </CCol>
  <CCol md={2}>
    <CFormInput id="inputZip" label="Zip" />
  </CCol>
  <CCol xs={5}>
    <CFormCheck type="checkbox" id="gridCheck" label="Check me out"/>
  </CCol>
  <CCol xs={12}>
    <CButton type="submit">Register</CButton>
  </CCol>
</CForm>

    )
}
export default Registration