import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";
import './login-register.css';
// import axios from 'axios';

// const getEmailData = () => {
//   axios
//   .get("http://localhost:5000/")
//   .then(data => console.log(data.data[0].emailid))
//   .catch(error => console.log(error));
//   };
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
const Eye = <FontAwesomeIcon className="icon" icon={faEye} />;
const EyeSlash = <FontAwesomeIcon className="icon" icon={faEyeSlash} />;


export const Login = (props) => {
  // const [email, setEmail] = useState('');
  // const [pass, setPass] = useState('');
  const [selectedOption, setSelectedOption] = useState("");

  const [formData, setFormData] = useState({});
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };
  // getEmailData();

  ///////password visibilty/////////////////////////////////////////
  const [show, setshow] = useState(false)
  const passWord = useRef();
  const showpassword = () => {

    setshow(!show)
    passWord.current.type = show ? 'password' : 'text';
  }
  ///////password visibilty/////////////////////////////////////////

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(formData);
    //inserting the data into login table 
    console.log(formData);
    fetch('http://localhost:5000/api/data/login', {
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
      // console.log(email);
      console.log(passWord);
      
          if (selectedOption === "driver") {
            window.location.href = "http://127.0.0.1:5500/main/driver/driver.html";
            // navigate("/driver.html");
            // <Link to='/customer'></Link>
          } else {
            window.open("http://192.168.0.204:3005/", '_blank')
            // window.location.href = "http://192.168.0.204:3005/";
            // window.location.href = ("http://127.0.0.1:5500/main/customer/customer.html");
          }
  }

  ////////////////////////////////////////////////////////////////****************///////////////////////////////////////////////////////////////////////////////

  //   // GET: Fetch all data from the database
  //   app.get('http://localhost:5000/', (req, res) => {
  //   db.select('cateorgy')
  //     .from('schema_wsm.register')
  //     .where('email= '+email)
  //     .then((data) => {
  //         // console.log(data);
  //         // res.json(data);
  //         console.log(req.body);
  //     })
  //     .catch((err) => {
  //         console.log(err);
  //     });
  // });


  // useEffect(() => {
  //   const fetchProducts = async () => {
  //     setLoading(true);
  //     const res = await axios.get(
  //       "http://localhost:5000/"
  //     );
  //     setProducts(res.data);
  //     setLoading(false);
  //   };
  //   fetchProducts();
  // }, []);

  //category  select category from register where email 
  /*use callback 
  use memo*/
  ////////////////////////////////////////////////////////////////****************///////////////////////////////////////////////////////////////////////////////


  return (
    <div className="Login">
      <div className="auth-form-container">
        <h2>Login</h2>
        {/* <p id= 'result'></p> */}
        <form className="login-form" onSubmit={handleSubmit}>
          <div className="div_label">
            <label htmlFor="email">Email ID</label>
            <input onChange={handleInputChange} type="email" placeholder="youremail@abc.com" id="email" name="email" />

            {/* <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="youremail@abc.com" id="email" name="email" /> */}
          </div>
          {/* <script>
                    function validateEmail(email) {
                        let res = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
                        return res.test(email);
                      }
                      function validate() {
                        let result = $("#result");
                        let email = $("#email").val();
                        result.text("");
                        if(validateEmail(email)) {
                          result.text(email + " is valid");
                          result.css("color", "blue");
                        } else {
                          result.text(email + " is not valid");
                          result.css("color", "red");
                        }
                        return false;
                      }
                      $("#validate").on("click", validate);

                </script> */}

          <div className="div_label">
            <br /><label htmlFor="password">Password</label>
            {/* <input value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="********" id="password" name="password" /> */}
            <input ref={passWord} type="password" placeholder="Enter Password" name="password" onChange={handleInputChange}></input>

            {/* <input ref={passWord} type="password" placeholder="Enter Password" name="password" onChange={(e) => setPass(e.target.value)}></input> */}

            {show ? <i onClick={showpassword}>{Eye}</i> : <i onClick={showpassword}>{EyeSlash}</i>}

          </div>

          <div className="div_label">
            <label htmlFor="category" >Choose a category:<br /></label>
            <select id="category" className="category" name="category" onChange= { (e) => {  setSelectedOption((e.target.value)); handleInputChange((e));}} >
            {/* <select id="category" className="category" name="category" onChange={(e) => setSelectedOption((e.target.value))} > */}
              <option value="none" selected disabled hidden>Select an Option</option>
              <option value="customer"> Customer</option>
              <option value="driver"> Driver</option>
            </select>
          </div>


          <br />
          <button type="submit">Log In</button>
        </form>
        <br />
        <Link to='/register'>Don't have an account?<br /> Register here.</Link>
      </div>
    </div>
  )
}