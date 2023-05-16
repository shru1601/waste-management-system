// import { CTable } from "@coreui/react"; 
import React from "react";
import { useEffect ,useState} from "react";

import "jquery/dist/jquery.min.js";
import "datatables.net-dt/js/dataTables.dataTables";
import "datatables.net-dt/css/jquery.dataTables.min.css";
import "datatables.net-buttons/js/dataTables.buttons.js";


import $ from "jquery";

const CustomerList = () => {

  
               $(document).ready(function () {
                 setTimeout(function () {
                   $("#table").DataTable({
                     pagingType: "full_numbers",
                     pageLength: 20,
                     processing: true,
                     "bDestroy": true,
                     dom: "Bfrtip",
                     select: {
                       style: "single",
                     },
         
               
                     fnRowCallback: function (
                       nRow,
                       aData,
                       iDisplayIndex,
                       iDisplayIndexFull
                     ) {
                       var index = iDisplayIndexFull + 1;
                       $("td:first", nRow).html(index);
                       return nRow;
                     },
         
                     lengthMenu: [
                       [10, 20, 30, 50, -1],
                       [10, 20, 30, 50, "All"],
                     ],
                     columnDefs: [
                       {
                         targets: 0,
                         render: function (data, type, row, meta) {
                           return type === "export" ? meta.row + 1 : data;
                         },
                       },
                     ],
                   });
                 }, 1000);
               });
             
   


  const [data, setData] = useState([]);


  useEffect(() => {
    fetch('http://localhost:5000/')
      .then(response => response.json())
      .then(data => setData(data))
      .catch(error => console.error('Error fetching data', error));
  }, []);
console.log(data)
let newData = data.map((e,i)=>{
return e;
})
// console.log(JSON.parse(newData))
console.log(newData)
  return (
    <>
  <div class="container-fluid py-4">
         <div class="table-responsive p-0 pb-2">
       <table id="table" className="table align-items-center justify-content-center mb-0">
           <thead>
               <tr>
                <th></th>
               <th className="text-uppercase text-secondary text-sm font-weight-bolder opacity-7 ps-2">Name</th>
               <th className="text-uppercase text-secondary text-sm font-weight-bolder opacity-7 ps-2">mobileno</th>
               <th className="text-uppercase text-secondary text-sm font-weight-bolder opacity-7 ps-2">email</th>
               <th className="text-uppercase text-secondary text-sm font-weight-bolder opacity-7 ps-2">address</th>
               <th className="text-uppercase text-secondary text-sm font-weight-bolder opacity-7 ps-2">gender</th>
               <th className="text-uppercase text-secondary text-sm font-weight-bolder opacity-7 ps-2">password</th>
               <th className="text-uppercase text-secondary text-sm font-weight-bolder opacity-7 ps-2">category</th>
               <th className="text-uppercase text-secondary text-sm font-weight-bolder opacity-7 ps-2">idproof</th>
               <th className="text-uppercase text-secondary text-sm font-weight-bolder opacity-7 ps-2">filePath</th>
</tr>
           </thead>
          
  <tbody>
        {newData.map((item, index) => (
          <tr key={index}>
            <td></td>
            <td>{item.name}</td>
            <td>{item.mobileno}</td>
            <td>{item.emailid}</td>
            <td>{item.address}</td>
            <td>{item.gender}</td>
            <td>{item.category}</td>
            <td>{item.password}</td>
            <td>{item.idproof}</td>
            <td>{item.filePath}</td>

          </tr>
        ))}
      </tbody>

          
       </table>
           </div>
           </div>
</>
  )
 
};

export default CustomerList;
