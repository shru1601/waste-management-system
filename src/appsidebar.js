import React from "react"
import CIcon from '@coreui/icons-react';
// import * as icon from '@coreui/icons';
import { CNavGroup, CNavItem, CSidebar, CSidebarBrand, CSidebarNav, CSidebarToggler } from "@coreui/react"
import { cilAccountLogout, cilBike, cilCart, cilSpeedometer, cilUser } from "@coreui/icons";
import { Link } from "react-router-dom";

const AppSidebar = () => {
 return <CSidebar>
  <CSidebarBrand>Waste Management System</CSidebarBrand>
  <CSidebarNav>
    <CNavItem to="#">
      <CIcon customClassName="nav-icon" icon={cilSpeedometer} />
      Dashboard
    </CNavItem>
    {/* <CNavGroup toggler="Extras"> */}
      <CNavItem href="#">
        <Link to="/users/customer" ><CIcon customClassName="nav-icon" icon={cilUser} /> Registration </Link>
      </CNavItem>
      <CNavItem href="#">
        <Link to="/users/order"><CIcon customClassName="nav-icon" icon={cilCart} /> Orders </Link>
      </CNavItem>
    {/* </CNavGroup> */}
    {/* <CNavGroup toggler="Extras">
      <CNavItem href="#">
        <Link to="/login"> <CIcon customClassName="nav-icon" icon={cilAccountLogout} /> Login </Link>
      </CNavItem>
      <CNavItem href="#">
        <Link to="/registration"> <CIcon customClassName="nav-icon" icon={cilAccountLogout} /> Registration </Link> */}
      {/* </CNavItem> */}
      
    {/* </CNavGroup> */}
  </CSidebarNav>
  <CSidebarToggler />
</CSidebar>
}
export default AppSidebar

