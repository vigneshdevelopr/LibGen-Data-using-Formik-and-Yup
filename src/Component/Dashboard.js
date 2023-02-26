import { CChart } from "@coreui/react-chartjs";
import {
  AppBar,
  Box,
  Grid,
  TextField,
  Typography,
  Button,
} from "@mui/material";
import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import Base from "../Base/Base";

import * as yup from 'yup';
import { useFormik } from "formik";

// private data Schema validation;

 export const libuservalidationSchema = yup.object({
  firstname: yup.string().required('Hey! you miss this section'),
  lastname: yup.string().required('Hey! you miss this section'),
  username: yup.string().required('Hey! you miss this section'),
  email: yup.string().required('Hey! you miss this section'),
  password:  yup.string().required('Password is required').min(6,'you have to enter atleast 6 characters'),
})


const Dashboard=({userData, setUser})=> {



//Formik 


const {values,handleChange,handleSubmit,handleBlur, touched}= useFormik({
  initialValues: {
    firstname : "",
    lastname:"",
    username:"",
    email:"",
    password:"",
  },
  validationSchema: libuservalidationSchema ,
  onSubmit : (newUserData) => {
    console.log("onSubmit triggerd", newUserData)
    newdata(newUserData);
  }

})
const history = useHistory();
const newdata = async(newUserData)=>{
  try{
    const response = await fetch ("https://63fb51942027a45d8d643fbc.mockapi.io/libgen/libgen",{

method:"POST",
body: JSON.stringify(newUserData),
headers: {
  "contentType": 'application/json'
},
 });

const finalData = await response.json()
console.log(finalData);
setUser([...userData, finalData])

  }catch(e){
    console.log("error catched")
  }
};




// const handleChange = (event) => {
//   const value = event.target.value
//   setValues({...values, [firstname]: value})
// };

// const [values, setValues] = useState({
//     firstname : "",
//     lastname :"",
//     username :"",
//     email : "",
//     password : ""
//   }); 
//   const {
//      firstname,
//      lastname, 
//      username, 
//      email,
//     password} = values; 


  return (
    <div >
    <Base  title="Dashboard">
      {/* Above codes are base for all components */}

      <Grid container spacing={0}>
        <Grid item sm={8}>
          <CChart
            type="line"
            data={{
              labels: [
                "Thriller",
                "Biography",
                "Horror",
                "Romance",
                "Sci-fi",
                "Philosophy",
                "Action",
              ],
              datasets: [
                {
                  label: "My First dataset",
                  backgroundColor: "rgba(220, 220, 220, 0.2)",
                  borderColor: "rgba(220, 220, 220, 1)",
                  pointBackgroundColor: "rgba(220, 220, 220, 1)",
                  pointBorderColor: "#fff",
                  data: [40, 20, 12, 39, 10, 40, 39, 80, 40],
                },
                {
                  label: "My Second dataset",
                  backgroundColor: "rgba(151, 187, 205, 0.2)",
                  borderColor: "rgba(151, 187, 205, 1)",
                  pointBackgroundColor: "rgba(151, 187, 205, 1)",
                  pointBorderColor: "#fff",
                  data: [50, 12, 28, 29, 7, 25, 12, 70, 60],
                },
              ],
            }}
          />
        </Grid>
        <Grid className="login-sec" style={{ textAlign: "center", maxWidth:'50%' }} item sm={4}>
          <Box
            sx={{
              
              backgroundColor: "#cdd0f2",
              borderRadius: "10px",
              lineBreak: "auto",
              marginLeft: 7,
              maxWidth: "50%",
            }}
          >
            <h1>Join Here !</h1>
            <form  onSubmit={handleSubmit}>
              <TextField
                style={{ marginBottom: "10px" }}
                id="standard-basic"
                label="First Name"
                value={values.firstname}
                onChange={handleChange}
                name = "firstname"
                variant="standard"
              />
              <br />
              <TextField
                style={{ marginBottom: "10px" }}
                id="standard-basic"
                value={values.lastname}
                onChange={handleChange}

                label="Last Name"
                name = "lastname"
                variant="standard"
              />
              <br />
              <TextField
                style={{ marginBottom: "10px" }}
                id="standard-basic"
                label="Username"
                value={values.username}
                onChange={handleChange}
                name = 'username'

                variant="standard"
              />
              <br />
              <TextField
                style={{ marginBottom: "10px" }}
                id="standard-basic"
                label="Email"
                value={values.email}
                name = "email"
                onChange={handleChange}

                variant="standard"
              />
              <br />
              <TextField
                style={{ marginBottom: "10px" }}
                id="standard-password-input"
                label="Password"
                value={values.password}
                onChange={handleChange}
                name = 'password'

                type="password"
                autoComplete="current-password"
                variant="standard"
              />
              <Button type="submit"  variant="contained" color="success">
                Success
              </Button>
            </form>
          </Box>
        </Grid>
      </Grid>




      {/* =================================== */}
    </Base>
    </div>
  )



  

}

export default Dashboard;
