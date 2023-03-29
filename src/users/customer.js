import { CTable } from "@coreui/react";
import React from "react";
import AppSidebar from "../appsidebar";
import Layout from "../layout/layout";
import BreadCrumb from "../pages/breadcrumb";
import Pagination from "../pages/pagination";

const CustomerList = () => {
  const customerTableColumns = [
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
      key: "address",
      label: "address",
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
      address: "Otto",
      contact: 123,
      _cellProps: { id: { scope: "row" } },
    },
    {
      id: 2,
      name: "Jacob",
      address: "Thornton",
      contact: 345,
      _cellProps: { id: { scope: "row" } },
    },
    {
      id: 3,
      name: "Jacob",
      address: "Thornton",
      contact: 444,
      _cellProps: { id: { scope: "row" } },
    },
    {
      id: 4,
      name: "Jacob",
      address: "Thornton",
      contact: 777,
      _cellProps: { id: { scope: "row" } },
    },
    {
      id: 5,
      name: "Jacob",
      address: "Thornton",
      contact: 787,
      _cellProps: { id: { scope: "row" } },
    },
  ];

         
        return <> <BreadCrumb /><Pagination /><CTable bordered  hover  columns={customerTableColumns} items={items} /></>;
};

export default CustomerList;
