import React from 'react';
import { useState } from "react";
import { Typography, TextField, Box, Button } from '@mui/material';
import { call_server } from '../utils/api';
import { useForm, Controller } from "react-hook-form";
import { Redirect } from "react-router-dom";

const RegisterForm = () => {

    const [form, setForm] = useState({
        title: "",
        description: false,
        youtube_id: ''
    });

    const {
       formState: { errors },
        handleSubmit,
        control,
    } = useForm();

    const initialToken = localStorage.getItem("tokens");
    if((initialToken && initialToken === 'null') || !initialToken){
      return (
        <Redirect to='/login' />
      )
    }


    const onSubmit = async (values) => {
        setForm(values);
        let api = '/movies';
        let method = 'POST';
        let data = values;
        call_server(method, api, data, true).then(data => {
          //response.json({ message: 'Request received!', data })
        });
    };


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
            <Typography variant="h2">Create a movie</Typography>
            <div>
            <Controller
              name="title"
              control={control}
              defaultValue=""
              render={({
                field: { onChange, value },
                fieldState: { error },
              }) => (
                <TextField
                  variant="outlined"
                  placeholder="Movie Name"
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
              name="description"
              control={control}
              defaultValue=""
              render={({
                field: { onChange, value },
                fieldState: { error },
              }) => (
                <TextField
                  variant="outlined"
                  placeholder="Description"
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
              name="youtube_id"
              control={control}
              defaultValue=""
              render={({
                field: { onChange, value },
                fieldState: { error },
              }) => (
                <TextField
                  variant="outlined"
                  placeholder="Movie Id"
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
                Create
            </Button>
        
    </Box>
  );
};


export default RegisterForm;