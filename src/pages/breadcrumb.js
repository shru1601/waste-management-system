import { CBreadcrumb, CBreadcrumbItem } from "@coreui/react"
import React from "react"
const BreadCrumb = () => {
    return(
        <><CBreadcrumb>
            <CBreadcrumbItem active>Home</CBreadcrumbItem>
        </CBreadcrumb><CBreadcrumb>
                <CBreadcrumbItem href="#">Home</CBreadcrumbItem>
                <CBreadcrumbItem href="#">pages</CBreadcrumbItem>
                {/* <CBreadcrumbItem active>Customer</CBreadcrumbItem> */}

            </CBreadcrumb></>
    )
}
export default BreadCrumb
