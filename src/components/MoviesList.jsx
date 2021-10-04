import * as React from 'react';
import { useState, useEffect } from "react";
import {Grid, AppBar, Toolbar, Typography} from '@mui/material';
import MovieItem from './MovieItem';
import { call_server } from '../utils/api';

const MoviesList = () => {
    const [movies, setMovies] = useState([]);
    let api = '/movies';
    let method = 'GET';
    //let data = values;
    useEffect(() => {
        call_server(method, api).then(data => {
            //response.json({ message: 'Request received!', data })
            console.log({'aadsa':data});
            setMovies(data);
          });
    }, []);

    return (
        <div>
            <AppBar position="static">
                <Toolbar variant="dense">
                    <Typography variant="h6" color="inherit" component="div">Movies</Typography>
                </Toolbar>
            </AppBar>
            <Grid container spacing={2}>
                {movies.map(function(item, i){
                    return <MovieItem movie={item} />
                })}
            </Grid>
        </div>
    )
}


export default MoviesList;