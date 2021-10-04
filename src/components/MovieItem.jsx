import * as React from 'react';
import {Card, CardHeader, CardContent, Typography, Grid} from '@mui/material';
import StarRatings from 'react-star-ratings';



const MovieItem = (props) => {

    const changeRating = () => {

    }

    return (
        <Grid item xs={3}>
            <Card>
                <CardHeader
                    title={props.movie.name}
                    style={{"marginBottom":"0", "paddingBottom":"0"}}
                />
                <CardContent>
                    <div style={{"paddingBottom": "57%","position":"relative", "marginBottom":"10px"}}>
                    <iframe width="100%" height="100%" style={{"position":"absolute", "width":"100%", "left":"0", "top":"0"}} src="https://www.youtube.com/embed/`{props.movie.movie_id}`" title="YouTube video player" border="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                    </div>
                    <Typography variant="body2" color="text.secondary">
                    {props.movie.description}
                    </Typography>
                    <StarRatings
                        rating={5}
                        starRatedColor="blue"
                        changeRating={changeRating()}
                        numberOfStars={6}
                        name='rating'
                        starDimension="15px"
                        starSpacing="5px"
                    />
                </CardContent>
            </Card> 
        </Grid>
    )
}


export default MovieItem;