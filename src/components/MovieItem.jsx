import * as React from 'react';
import {Card, CardHeader, CardContent, Typography, Grid} from '@mui/material';


const MovieItem = (props) => {
    return (
        <Grid item xs={3}>
            <Card>
                <CardHeader
                    title={props.movie.name}
                />
                <CardContent>
                    <div style={{"paddingBottom": "57%","position":"relative"}}>
                    <iframe width="100%" height="100%" style={{"position":"absolute", "width":"100%", "left":"0", "top":"0"}} src="https://www.youtube.com/embed/`{props.movie.movie_id}`" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </div>
                    <Typography variant="body2" color="text.secondary">
                    {props.movie.description}
                    </Typography>
                </CardContent>
            </Card> 
        </Grid>
    )
}


export default MovieItem;