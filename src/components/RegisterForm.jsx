import React from 'react';
import { useState } from "react";
import { Typography, TextField, Box, Button, Link } from '@mui/material';
import { call_server } from '../utils/api';
import { useForm, Controller } from "react-hook-form";
import { Redirect } from "react-router-dom";

const RegisterForm = () => {

    const [redirect, setRedirect] = useState(false);

    const [form, setForm] = useState({
        email: "",
        password: false,
        password_confirmation: false,
        name: ''
    });

    const {
        register,
        formState: { errors },
        handleSubmit,
        control,
    } = useForm();


    const onSubmit = async (values) => {
        setForm(values);
        let api = '/auth/register';
        let method = 'POST';
        let data = values;
        call_server(method, api, data).then(data => {
          console.log(data);
          setRedirect(true);
          //response.json({ message: 'Request received!', data })
        });
    };


  if(!redirect){
    return (
      <Box
          component="form"
          sx={{
          '& .MuiTextField-root': { m: 1, width: '650px' },
          }}
          style={{"maxWidth":"650px", "margin": "0 auto"}}
          noValidate
          autoComplete="off"
      >
              <Typography variant="h2">Register</Typography>
              <div>
              <Controller
                name="name"
                control={control}
                defaultValue=""
                render={({
                  field: { onChange, value },
                  fieldState: { error },
                }) => (
                  <TextField
                    variant="outlined"
                    placeholder="Full Name"
                    value={value}
                    style={{"width": "100%","marginRight":0,"marginLeft":0}}
                    onChange={onChange}
                    error={!!error}
                  />
                )}
              />
              </div>
              <div>
              <Controller
                name="email"
                control={control}
                defaultValue=""
                render={({
                  field: { onChange, value },
                  fieldState: { error },
                }) => (
                  <TextField
                    variant="outlined"
                    placeholder="Email"
                    value={value}
                    style={{"width": "100%","marginRight":0,"marginLeft":0}}
                    onChange={onChange}
                    error={!!error}
                  />
                )}
              />
              </div>
              <div>
              <Controller
                name="password"
                control={control}
                defaultValue=""
                render={({
                  field: { onChange, value },
                  fieldState: { error },
                }) => (
                  <TextField
                    variant="outlined"
                    type="password"
                    placeholder="Password"
                    value={value}
                    style={{"width": "100%","marginRight":0,"marginLeft":0}}
                    onChange={onChange}
                    error={!!error}
                  />
                )}
              />
              </div>
              <div>
              <Controller
                name="password_confirmation"
                control={control}
                defaultValue=""
                render={({
                  field: { onChange, value },
                  fieldState: { error },
                }) => (
                  <TextField
                    variant="outlined"
                    type="password"
                    placeholder="Password Confirmation"
                    value={value}
                    style={{"width": "100%","marginRight":0,"marginLeft":0}}
                    onChange={onChange}
                    error={!!error}
                  />
                )}
              />
              </div>
              <Button fullWidth variant="contained" color="primary" type="submit"
                onClick={handleSubmit(onSubmit)}>
                  Register
              </Button>
              <div>Already a user? <Link href="/login" color="inherit">Login</Link></div>
          
      </Box>
    );
  }else{
    return <Redirect to="login" />
  }
};


export default RegisterForm;