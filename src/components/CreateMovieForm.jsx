import React from 'react';
import { useState } from "react";
import { Typography, TextField, Box, Button } from '@mui/material';
import { call_server } from '../utils/api';
import { useForm, Controller } from "react-hook-form";

const RegisterForm = () => {

    const [form, setForm] = useState({
        email: "",
        password: false,
        fullname: ''
    });

    const {
       formState: { errors },
        handleSubmit,
        control,
    } = useForm();


    const onSubmit = async (values) => {
        setForm(values);
        let api = '/movies';
        let method = 'POST';
        let data = values;
        call_server(method, api, data).then(data => {
          //response.json({ message: 'Request received!', data })
        });
    };


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
            <Typography variant="h2">Create a movie</Typography>
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
                  style={{"width": "100%","margin-right":0,"margin-left":0}}
                  onChange={onChange}
                  error={!!error}
                />
              )}
            />
            </div>
            <div>
            <Controller
              name="description"
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
              name="movie_id"
              control={control}
              defaultValue=""
              render={({
                field: { onChange, value },
                fieldState: { error },
              }) => (
                <TextField
                  variant="outlined"
                  placeholder="Password"
                  value={value}
                  style={{"width": "100%","margin-right":0,"margin-left":0}}
                  onChange={onChange}
                  error={!!error}
                />
              )}
            />
            </div>
            <Button fullWidth variant="contained" color="primary" type="submit"
              onClick={handleSubmit(onSubmit)}>
                Create
            </Button>
        
    </Box>
  );
};


export default RegisterForm;