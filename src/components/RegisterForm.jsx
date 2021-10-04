import React from 'react';
import { useState } from "react";
import { FormControl, TextField, Box, Button, Link } from '@mui/material';
import { call_server } from '../utils/api';
import { useForm, Controller } from "react-hook-form";

const RegisterForm = () => {

    const [form, setForm] = useState({
        email: "",
        password: false,
        fullname: ''
    });

    const {
        register,
        formState: { errors },
        handleSubmit,
        control,
    } = useForm();


    const onSubmit = async (values) => {
        setForm(values);
        let api = '/users';
        let method = 'POST';
        let data = values;
        call_server(method, api, data).then(data => {
          //response.json({ message: 'Request received!', data })
          console.log({'aadsa':data});
        });
    };


  return (
    <Box
        component="form"
        sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
        }}
        noValidate
        autoComplete="off"
    >
        
            <Controller
              name="fullname"
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
                  fullWidth
                  onChange={onChange}
                  error={!!error}
                />
              )}
            />
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
                  fullWidth
                  onChange={onChange}
                  error={!!error}
                />
              )}
            />
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
                  fullWidth
                  onChange={onChange}
                  error={!!error}
                />
              )}
            />

            {/* <TextField id="email" label="Email" variant="outlined" onChange={onChange} /> */}
            {/* <TextField id="password" label="Password" variant="outlined" type="password" /> */}
            <Button fullWidth variant="contained" color="primary" type="submit"
              onClick={handleSubmit(onSubmit)}>
                login
            </Button>
            <div>Already a user? <Link href="/login" color="inherit">Login</Link></div>
        
    </Box>
  );
};


export default RegisterForm;