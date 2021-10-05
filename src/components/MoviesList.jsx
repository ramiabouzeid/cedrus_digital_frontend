import * as React from 'react';
import { useState, useEffect } from "react";
import {Grid, Typography, TextField} from '@mui/material';
import MovieItem from './MovieItem';
import { call_server } from '../utils/api';
import { Redirect } from "react-router-dom";
import { useForm, Controller } from "react-hook-form";

const MoviesList = () => {
    const [searchKey, setSearchKey] = useState('');
    const [movies, setMovies] = useState([]);
    let api = '/movies';
    let method = 'GET';
    //let data = values;
    useEffect(() => {
        call_server(method, api, {}, true).then(data => {
            console.log(data);
            //response.json({ message: 'Request received!', data })
            setMovies(data);
          });
    }, []);

    const {
        control,
    } = useForm();

    const initialToken = localStorage.getItem("tokens");
    if((initialToken && initialToken === 'null') || !initialToken){
      return (
        <Redirect to='/login' />
      )
    }

    const onChange = function(event){
        setSearchKey(event.target.value);
    };
    let filteredMovies = movies.filter(function(item){
        return searchKey === '' || item.title.indexOf(searchKey) !== -1;
    });
    console.log('filteredMovies');
    console.log(filteredMovies);
    let videos_render = '';
    if(filteredMovies.length===0){
        videos_render = 'No videos to show';
    };
    return (
        <div>
            <Typography variant="h2">Movies</Typography>
            <div>
                <div>
                    <TextField
                    variant="outlined"
                    placeholder="Search"
                    style={{"width": "100%","marginRight":0,"marginLeft":0}}
                    onChange={onChange}
                    />
                </div>
            </div>
            {videos_render}
            <Grid container spacing={2}>
                {filteredMovies.map(function(item, i){
                    return <MovieItem movie={item} key={i} />
                })}
            </Grid>
        </div>
    )
}


export default MoviesList;