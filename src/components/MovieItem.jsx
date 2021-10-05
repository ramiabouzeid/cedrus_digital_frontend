import * as React from 'react';
import {Card, CardHeader, CardContent, Typography, Grid, Rating} from '@mui/material';
import StarRating from './StarRating';



const MovieItem = (props) => {

    return (
        <Grid item xs={3}>
            <Card>
                <CardHeader
                    title={props.movie.title}
                    style={{"marginBottom":"0", "paddingBottom":"0"}}
                />
                <CardContent>
                    <div style={{"paddingBottom": "57%","position":"relative", "marginBottom":"10px"}}>
                    <iframe width="100%" height="100%" style={{"position":"absolute", "width":"100%", "left":"0", "top":"0"}} src="https://www.youtube.com/embed/`{props.movie.youtube_id}`" title="YouTube video player" border="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                    </div>
                    <Typography variant="body2" color="text.secondary">
                    {props.movie.description}
                    </Typography>
                    <StarRating votes={props.movie.votes} id={props.movie.id} />
                </CardContent>
            </Card> 
        </Grid>
    )
}


export default MovieItem;