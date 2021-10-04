import React from 'react';
import { useState } from "react";
import { FormControl, TextField, Box, Button, Typography } from '@mui/material';
import { call_server } from '../utils/api';
import { useForm, Controller } from "react-hook-form";
import { Redirect } from "react-router-dom";

const LoginForm = () => {

    const [form, setForm] = useState({
        email: "",
        password: "",
    });

    const [redirect, setRedirect] = useState(false);

    const {
        formState: { errors },
        handleSubmit,
        control,
    } = useForm();

    const onSubmit = async (values) => {
        setForm(values);
        let api = '/users';
        let method = 'GET';
        call_server(method, api).then(data => {
          var matching_users = data.filter(email => {
            return email.email === values.email && email.password === values.password;
          });
          if(matching_users.length>0){
            setRedirect(true);
          }else{
            
          }
        });
    };

  //   const
  if(!redirect){
      return (
        <Box
            component="form"
            sx={{
            '& .MuiTextField-root': { m: 1, width: '650px' },
            }}
            style={{"max-width":"650px", "margin": "0 auto"}}
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
                      style={{"width": "100%","margin-right":0,"margin-left":0}}
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
                      style={{"width": "100%","margin-right":0,"margin-left":0}}
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
  }else{
    return <Redirect to="moviesList" />
  };
};


export default LoginForm;