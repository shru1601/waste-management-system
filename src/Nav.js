import React from "react"
import { CCard, CCardBody, CCol, CNav, CNavItem, CNavLink, CRow } from "@coreui/react"
const Navs = () => {
  return (
    <CRow>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardBody>
              <CNav>
                <CNavItem>
                  <CNavLink href="/users/customer" active>
                    CustomerList
                  </CNavLink>
                </CNavItem>
                <CNavItem>
                  <CNavLink href="/login">Login</CNavLink>
                </CNavItem>
                <CNavItem>
                  <CNavLink href="#">Link</CNavLink>
                </CNavItem>
                <CNavItem>
                  <CNavLink href="#" disabled>
                    Disabled
                  </CNavLink>
                </CNavItem>
              </CNav>
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  )
}
export export default Navs

    