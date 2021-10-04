import * as React from 'react';
import { useState, useEffect } from "react";
import {Grid, Typography} from '@mui/material';
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
            setMovies(data);
          });
    }, []);

    return (
        <div>
            <Typography variant="h2">Movies</Typography>
            <Grid container spacing={2}>
                {movies.map(function(item, i){
                    return <MovieItem movie={item} key={i} />
                })}
            </Grid>
        </div>
    )
}


export default MoviesList;