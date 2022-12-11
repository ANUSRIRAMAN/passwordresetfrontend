import { useFormik } from 'formik';
import React from 'react'
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  useNavigate,
  useParams,
} from "react-router-dom";
import axios from 'axios';
import { config } from '../config/config';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

function Loginpage() {


let navigate=useNavigate()
  const formik = useFormik({
    initialValues :{
Email:"",
Password:""
    },
    onSubmit :async (values) => {
      try{
      var login = await axios.post(`${config().api}/login`, values);
      localStorage.setItem("react_app_token", login.data.token);
      
      alert(login.data.message);
      navigate(`/dashboard/${login.data.id}`);
    }
    catch(err){
      alert("Invalid email or password");
      console.log(err);
    }
  }
  }) 







  return (
    <div className="row justify-content-center">
    <div className="col-xl-10 col-lg-12 col-md-9">
      <div className="card o-hidden border-0 shadow-lg my-5">
        <div className="card-body p-0">
          <div className="row">
            <div  className="col-lg-6 d-none d-lg-block bg-login-image"><img style={{height:"520px",width:"110%"}}  src='https://api.time.com/wp-content/uploads/2014/12/login.jpg'/></div>
            <div className="col-lg-6">
              <div className="p-5">
                <div className="text-center">
                  <h1 className="h4 text-gray-900 mb-4">Login page</h1>
                </div>
                <form className="user" onSubmit={formik.handleSubmit}>
                  <div className="form-group p-2">
                 
                     <TextField id="outlined-basic" label="Email" variant="outlined"     type="email"
                      name = "Email"
                        onChange={formik.handleChange}   value={formik.values.Email}  
                      className="form-control form-control-user"
                    
                      aria-describedby="emailHelp"
                      placeholder="Enter Email Address..."/>
                  </div>
                  <div className="form-group p-2">
                   
                     <TextField id="outlined-basic" label="password" variant="outlined"    type="password"
                      name = "Password"
                      onChange={formik.handleChange}   value={formik.values.Password}  
                      className="form-control form-control-user"
                     
                      placeholder="Password"/>
                  </div><br/>
                 &nbsp;&nbsp;
                 
          
                  
                  <Button variant="contained"  type='submit'>Login</Button>
               
            
                </form><br/>
           
                <div className="text-center mb-3">
                  <Link to="/forgetpassword"   style={{textDecoration:"none"}} >
                    Forgot Password?
                  </Link>
                </div>
                <div className="text-center">
                  <Link style={{textDecoration:"none"}} to="/createaccount">
                   Dont have an Account Create an Account!
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>




  )
}

export default Loginpage