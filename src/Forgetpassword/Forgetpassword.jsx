import React from "react";
import { useFormik } from "formik";
import { Link } from "react-router-dom";
import axios from "axios";
import { config } from "../config/config";
import Button from "@mui/material/Button";

function Forgetpassword() {
  const formik = useFormik({
    initialValues: {
      UserName: "",
    },
    onSubmit: async (values) => {
      try {
        const verification = await axios.post(
          `${config().api}/verificationmail`,
          values
        );
        alert(verification.data.message);
      } catch (error) {
        console.log(error);
      }
    },
  });

  return (
    <div className="container p-5">
      <form onSubmit={formik.handleSubmit}>
        <div class="mb-3 m-5 ">
          <input
            type="text"
            name="UserName"
            placeholder="UserName"
            onChange={formik.handleChange}
            value={formik.values.UserName}
            class="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
        </div>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <Button
          type="submit"
          variant="contained"
          class="btn btn-outline-primary mt-5 ms-5"
        >
          Reset Password
        </Button>
        <p>(check your mail for verification code and link to reset password. LINK WILL BE SEND TO MAIL)</p>
      </form>
    </div>
  );
}

export default Forgetpassword;
