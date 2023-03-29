import React, { useState, useRef } from "react";
import {Link} from "react-router-dom";
import axios from 'axios';

//For password eye
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye,faEyeSlash } from "@fortawesome/free-solid-svg-icons";
const Eye = <FontAwesomeIcon className="icon" icon={faEye} />;
const EyeSlash = <FontAwesomeIcon className="icon" icon ={faEyeSlash}/>;


export const Register = (props) => {

///////password visibilty/////////////////////////////////////////
const[show,setshow]=useState(false)
const pass = useRef();
const showpassword = () =>{

    setshow(!show)
    pass.current.type = show ? 'password':'text';
}
/////////////////////password visibilty//////////////////  

    const [file, setFile] = useState(''); // storing the uploaded file
    // storing the received file from backend
    const [data, getFile] = useState({ name: "", path: "" });
    const el = useRef(); // accesing input element

    const [formData, setFormData] = useState({});

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
      };

      


      const handleChange = (e) => {
        const file = e.target.files[0]; // accessing file
        console.log(file);
        setFile(file); // storing file
    }


    const uploadFile = () => {
        const formDaata = new FormData();
        formDaata.append('file', file); // appending file
        axios.post('http://localhost:5000/upload', formDaata
        // , {
        //     onUploadProgress: (ProgressEvent) => {
        //         let progress = Math.round(
        //         ProgressEvent.loaded / ProgressEvent.total * 100) + '%';
        //         setProgess(progress);
        //     }
        // }
        ).then(res => {
            console.log(res);
            getFile({ name: res.data.name,
                     path: 'http://localhost:5000' + res.data.path
                   })
        }).catch(err => console.log(err))}

    const handleSubmit = (e) => {

        e.preventDefault();
        // document.getElementById('signupbutton').onclick = uploadFile;
        console.log(formData);
        fetch('http://localhost:5000/api/data', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(formData)
        })
        .then(response => response.json())  
        .then(data => console.log(data))
        // .then(res => {
        //     console.log(res);
        //     getFile({ name: res.data.name,
        //              path: 'http://localhost:5000' + res.data.path
        //            })
        // })
        .catch(error => console.error(error));



        alert('Thanks for Registration! Now you may go towards login!!');

        const gender = document.querySelector("input[type='radio'][name=gender]:checked").value;
        const category = document.getElementById("category").value;
        // console.log(email);
        // console.log(name);
        console.log(gender);
        console.log(category);  
          
    }

        function checkCategory(elem) {
            if (elem !== "driver")
               document.getElementById("driver-option").style.display = 'none';
            else
                document.getElementById("driver-option").style.display = 'block';  
                     
        }
      
        // checkCategory( document.getElementById("category").value); 
    return (
        <div className="auth-form-container">
            <h2>Register</h2>
            <form className="register-form" onSubmit={handleSubmit}>
            <div className="div_label">
            <label htmlFor="name">Full name</label>
            <input name="name" onChange={handleInputChange} id="name" placeholder="Full Name" />          
            </div>

            <div className="div_label">
            <br/><label htmlFor="mobile">Mobile No.</label>
            <input  onChange={handleInputChange}type="mobile" placeholder="+XX-XXXXXXXXXX" id="mobile" name="mobile" />
            </div>  <div className="div_label">

            <br/><label htmlFor="email">Email ID</label>
            <input onChange={handleInputChange}type="email" placeholder="youremail@abc.com" id="email" name="email" />
            </div>
            <div className="div_label">
            <br/><label htmlFor="address">Address</label>
            <textarea onChange={handleInputChange}type="address" placeholder="" id="address" name="address" />
            </div>

           

            <div className="div_label" id="gender">
            <br/><label htmlFor="gender">Gender</label><br/>
             <input type="radio" id="male" name="gender" value="male" onChange={handleInputChange}/>
              <label for="male"> Male </label>
              <input type="radio" id="female" name="gender" value="female" onChange={handleInputChange}/>
              <label for="female"> Female  </label>
              <input type="radio" id="other" name="gender" value="other" onChange={handleInputChange}/>
              <label for="other"> Other</label><br/><br/>              
            </div>

                {/* onChange={checkCategory(this.value)} */}
            <div className="div_label">
                <label htmlFor="category" >Choose a category:<br/></label>
                <select id="category" className="category" name="category" onChange= { (e) => {  checkCategory((e.target.value)); handleInputChange((e));}} >
                    <option value="none" selected disabled hidden>Select an Option</option>
                    <option value="customer"> Customer</option>
                    <option value="driver"> Driver</option>
                </select>
                </div>
             
                
                <div id="driver-option" className="div_label">
                <br/><label htmlFor="idproof" style={{fontSize:14}}>ID Proof</label><br/>
                        <input type="radio"  name="idproof" value="pan" onChange={handleInputChange}/>
                        <label for="pan"> PAN Card </label><br/>
                        <input type="radio"  name="idproof" value="aadharcard" onChange={handleInputChange}/>
                        <label for="aadharcard"> Aadhar Card  </label><br/>
                        <input type="radio" name="idproof" value="driving lincense" onChange={handleInputChange}/>
                        <label for="dl"> Driving Lincense</label><br/><br/><br/>
                        {/* <input type="checkbox"  name="gender" value="other"/>
                        <label for="other"> Other</label><br/><br/>  */}

                        <label htmlFor="upload">Upload the document:</label>
                        <input type="file" name="filename" ref={el} onChange={handleChange} style={{fontSize:15}}/>
                </div> 
           
           
            <div className="div_label">
            <label htmlFor="password" >Password</label>
            {/* <input onChange={handleInputChange} type="password" placeholder="********" id="password" name="password" /> */}
            <input ref={pass} type = "password" placeholder="Enter Password" name="password" onChange={handleInputChange}></input>

            {show ? <i onClick={showpassword}>{Eye}</i>:<i onClick={showpassword}>{EyeSlash}</i>}

            


            </div>
            <br/><button id="signupbutton" onClick={uploadFile} type="submit" >Sign Up</button>
            {/* onClick={uploadFile}*/}
        </form>

        <br/><Link to='/login'>Don't have an account?<br/> Register here.</Link>
        {/* <button className="link-btn" onClick={() => props.onFormSwitch('login')}>Already have an account?<br/> Login here.</button> */}
    </div>
    
    )
}






// import React, { useState } from "react";
// import {Link} from "react-router-dom";


// export const Register = (props) => {
//     // const [email, setEmail] = useState('');
//     // const [pass, setPass] = useState('');
//     // const [name, setName] = useState('');
//     // const [address, setAddress] = useState('');
//     // const [mobile, setMobile] = useState('');
//     const [formData, setFormData] = useState({});

//     const handleInputChange = (event) => {
//         const { name, value } = event.target;
//         setFormData({ ...formData, [name]: value });
//       };




//     const handleSubmit = (e) => {
//         e.preventDefault();
//         console.log(formData);
//         fetch('/api/data', {
//           method: 'POST',
//           headers: {
//             'Content-Type': 'application/json'
//           },
//           body: JSON.stringify(formData)
//         })
//         .then(response => response.json())
//         .then(data => console.log(data))
//         .catch(error => console.error(error));

//         const gender = document.querySelector("input[type='radio'][name=gender]:checked").value;
//         const category = document.getElementById("category").value;
//         // console.log(email);
//         // console.log(name);
//         console.log(gender);
//         console.log(category);  
          
//     }

//         function checkCategory(elem) {
//             if (elem !== "driver")
//                document.getElementById("driver-option").style.display = 'none';
//             else
//                 document.getElementById("driver-option").style.display = 'block';           
//         }
      
//         // checkCategory( document.getElementById("category").value); 
//     return (
//         <div className="auth-form-container">
//             <h2>Register</h2>
//             <form className="register-form" onSubmit={handleSubmit}>
//             <div className="div_label">
//             <label htmlFor="name">Full name</label>
//             <input value={name} name="name" onChange={handleInputChange} id="name" placeholder="Full Name" />          
//             </div>

//             <div className="div_label">
//             <br/><label htmlFor="mobile">Mobile No.</label>
//             <input value={mobile} onChange={handleInputChange}type="mobile" placeholder="+XX-XXXXXXXXXX" id="mobile" name="mobile" />
//             </div>  <div className="div_label">

//             <br/><label htmlFor="email">Email ID</label>
//             <input value={email} onChange={handleInputChange}type="email" placeholder="youremail@abc.com" id="email" name="email" />
//             </div>
//             <div className="div_label">
//             <br/><label htmlFor="address">Address</label>
//             <textarea value={address} onChange={handleInputChange}type="address" placeholder="" id="address" name="address" />
//             </div>

           

//             <div className="div_label" id="gender">
//             <br/><label htmlFor="gender">Gender</label><br/>
//              <input type="radio" id="male" name="gender" value="male"/>
//               <label for="male"> Male </label>
//               <input type="radio" id="female" name="gender" value="female"/>
//               <label for="female"> Female  </label>
//               <input type="radio" id="other" name="gender" value="other"/>
//               <label for="other"> Other</label><br/><br/>              
//             </div>

//                 {/* onChange={checkCategory(this.value)} */}
//             <div className="div_label">
//                 <label htmlFor="category" >Choose a category:<br/></label>
//                 <select id="category" className="category" onChange={handleInputChange} >
//                     <option value="none" selected disabled hidden>Select an Option</option>
//                     <option value="customer"> Customer</option>
//                     <option value="driver"> Driver</option>
//                 </select>
//                 </div>
             
                
//                 <div id="driver-option" className="div_label">
//                 <br/><label htmlFor="idproof" style={{fontSize:14}}>ID Proof</label><br/>
//                         <input type="checkbox"  name="pan" value="pan"/>
//                         <label for="pan"> PAN Card </label><br/>
//                         <input type="checkbox"  name="aadharcard" value="aadharcard"/>
//                         <label for="aadharcard"> Aadhar Card  </label><br/>
//                         <input type="checkbox" name="dl" value="dl"/>
//                         <label for="dl"> Driving Lincense</label><br/>
//                         <input type="checkbox"  name="gender" value="other"/>
//                         <label for="other"> Other</label><br/><br/> 

//                         <label htmlFor="upload">Upload the document:</label>
//                         <input type="file" name="filename" style={{fontSize:15}}/>
//                 </div> 
           
            
//             <div className="div_label">
//             <label htmlFor="password">Password</label>
//             <input value={pass} onChange={handleInputChange} type="password" placeholder="********" id="password" name="password" />
//             </div>
//             <br/><button type="submit">Sign Up</button>
//         </form>

//         <br/><Link to='/login'>Don't have an account?<br/> Register here.</Link>
//         {/* <button className="link-btn" onClick={() => props.onFormSwitch('login')}>Already have an account?<br/> Login here.</button> */}
//     </div>
    
//     )
// }
