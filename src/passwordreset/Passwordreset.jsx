import { useFormik } from 'formik'
import React from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom';
import { config } from '../config/config';
import { Link } from 'react-router-dom';
import { Button } from '@mui/material';
function Passwordreset() {
    let {id} = useParams();
 const formik = useFormik({
    initialValues : {

        Password :""
    },
    onSubmit :async(values)=> {
values.id = id
const newpassword=await axios.post(`${config().api}/newpassword`,values);
alert(newpassword.data.message);


    }
  })
  
    return (
    <div>
        <form onSubmit={formik.handleSubmit}>
 
  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label">Reset Password</label>
    <input type="password" name='Password' onChange={formik.handleChange}   value={formik.values.Password}  class="form-control" id="exampleInputPassword1"/>
  </div>
 
  <button type="submit" class="btn btn-primary">Submit</button>

</form> <br/>
 <Button component ={Link} to="/"variant="contained" style={{marginLeft:"20px"}}>Click me for Login page after submitting password</Button>
    </div>
  )
}

export default Passwordreset