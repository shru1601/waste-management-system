import React from "react";
import { CTable } from "@coreui/react";
import BreadCrumb from "../pages/breadcrumb";
import Pagination from "../pages/pagination";
import Layout from "../layout/layout";
const DeliveryAgent = () => {
    const driverTableColums = [
        {
          key: "id",
          label: "#",
          _props: { scope: "col" },
        },
        {
          key: "name",
          _props: { scope: "col" },
        },
        {
          key: "license_no",
          label: "license_no",
          _props: { scope: "col" },
        },
        {
          key: "contact",
          label: "contact",
          _props: { scope: "col" },
        },
      ];
      const items = [
        {
          id: 1,
          name: "Mark",
          license_no: 3455,
          contact: 123,
          _cellProps: { id: { scope: "row" } },
        },
        {
          id: 2,
          name: "Jacob",
          license_no: 456354,
          contact: 345,
          _cellProps: { id: { scope: "row" } },
        },
        {
          id: 3,
          name: "Jacob",
          license_no: 43654,
          contact: 444,
          _cellProps: { id: { scope: "row" } },
        },
        {
          id: 4,
          name: "Jacob",
          license_no: 43542,
          contact: 777,
          _cellProps: { id: { scope: "row" } },
        },
        {
          id: 5,
          name: "Jacob",
          license_no: 4365,
          contact: 787,
          _cellProps: { id: { scope: "row" } },
        },
      ];
    
      return <><BreadCrumb /> <Pagination /><CTable columns={driverTableColums} items={items} /></>;
    };
    
export default DeliveryAgent