import React from 'react';
import { useState } from "react";
import { FormControl, TextField, Box, Button, Typography } from '@mui/material';
import { call_server } from '../utils/api';
import { useForm, Controller } from "react-hook-form";
import { Redirect } from "react-router-dom";
import { useAuth } from "../context/auth";

const LoginForm = () => {

    const { setAuthTokens } = useAuth();
    const [form, setForm] = useState({
        email: "",
        password: "",
    });

    const [redirecturl, setRedirecturl] = useState('');

    const {
        formState: { errors },
        handleSubmit,
        control,
    } = useForm();

    const onSubmit = async (values) => {
        setForm(values);
        let api = '/auth/login';
        let method = 'POST';
        let params = {
          email: values.email,
          password: values.password
        };
        call_server(method, api, params).then(data => {
          setAuthTokens(data.access_token);
          localStorage.setItem("user", JSON.stringify(data.user));
          setRedirecturl('/MoviesList');
          console.log(data);
        });
    };

  //   const
  if(redirecturl !== ''){
    return (
      <Redirect to={redirecturl} />
    )
  }
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
            <Typography variant="h2">Login</Typography>
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
                  placeholder="Password"
                  type="password"
                  value={value}
                  style={{"width": "100%","marginRight":0,"marginLeft":0}}
                  onChange={onChange}
                  error={!!error}
                />
              )}
            />
            </div>
            <div>
              <Button fullWidth variant="contained" color="primary" type="submit"
                onClick={handleSubmit(onSubmit)}>
                  login
              </Button>
            </div>
        
    </Box>
  );
};


export default LoginForm;