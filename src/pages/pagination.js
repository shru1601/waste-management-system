import { CPagination, CPaginationItem } from "@coreui/react"
import React from "react"
const Pagination = () => {
    return(

        <CPagination aria-label="Page navigation example">
        <CPaginationItem>Previous</CPaginationItem>
        <CPaginationItem>1</CPaginationItem>
        <CPaginationItem>2</CPaginationItem>
        <CPaginationItem>3</CPaginationItem>
        <CPaginationItem>Next</CPaginationItem>
      </CPagination>
    )
}
export default Pagination