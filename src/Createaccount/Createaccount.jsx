import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useFormik } from "formik";
import axios from "axios";
import { config } from "../config/config";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from '@mui/material/Button';
import {Link} from "react-router-dom";
function Createaccount() {
  const formik = useFormik({
    initialValues: {
      UserName: "",
      Email: "",
      Password: "",
    },
    onSubmit: async (values) => {
      try {
        let register = await axios.post(`${config().api}/registration`, values);
        alert(register.data.message);
      } catch (error) {
        console.log(error);
      }
    },
  });

  return (
    <div className="row">
      <div className="col-lg-12">
        <div className="container p-5">
          <form onSubmit={formik.handleSubmit}>
            <div class="mt-5 mb-3">
              <label for="exampleInputEmail2" class="form-label">
                Username
              </label>
              <input
                type="text"
                name="UserName"
                onChange={formik.handleChange}
                value={formik.values.UserName}
                class="form-control"
                id="exampleInputEmail2"
                aria-describedby="emailHelp"
              />
              
              
            </div>

            <div class="mb-3">
              <label for="exampleInputEmail1" class="form-label">
                Email
              </label>
              <input
                type="email"
                name="Email"
                onChange={formik.handleChange}
                value={formik.values.Email}
                class="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
              />
            </div>

            <div class="mb-3">
              <label for="exampleInputPassword1" class="form-label">
                Password
              </label>
              <input
                type="password"
                name="Password"
                onChange={formik.handleChange}
                value={formik.values.Password}
                class="form-control"
                id="exampleInputPassword1"
              />
            </div>
         
            <Button type="submit" variant="contained" style={{marginLeft:"20px"}}>
              Submit
            </Button>&nbsp;
            <Button component ={Link} to="/"variant="contained" style={{marginLeft:"20px"}}>Signin</Button>

          </form>
        </div>
      </div>
    </div>
  );
}

export default Createaccount;
