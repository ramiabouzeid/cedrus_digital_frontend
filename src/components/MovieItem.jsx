import * as React from 'react';
import { useState } from 'react';
import {Card, CardHeader, CardContent, Typography, Grid, Modal} from '@mui/material';
import StarRating from './StarRating';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    boxShadow: 24,
    p: 4,
  };

const MovieItem = (props) => {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    return (
        <Grid item md={3}>
            <Card>
                <CardHeader
                    title={props.movie.title}
                    style={{"marginBottom":"0", "paddingBottom":"0"}}
                />
                <CardContent>
                    <div style={{"paddingBottom": "57%","position":"relative", "marginBottom":"10px"}} onClick={handleOpen}>
                        <img width="100%" height="100%" style={{"position":"absolute", "width":"100%", "left":"0", "top":"0"}} alt="" src={`https://img.youtube.com/vi/${props.movie.youtube_id}/0.jpg`} />
                    </div>
                    <Typography variant="body2" color="text.secondary">
                    {props.movie.description}
                    </Typography>
                    <StarRating votes={props.movie.votes} id={props.movie.id} />
                </CardContent>
            </Card> 
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <div style={style}>
                    <div style={{"paddingBottom": "57%","position":"relative"}}>
                    <iframe width="100%" height="100%" style={{"position":"absolute", "width":"100%", "left":"0", "top":"0"}} src={`https://www.youtube.com/embed/${props.movie.youtube_id}`} title="YouTube video player" border="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                    </div>
                </div>
            </Modal>
        </Grid>
    )
}


export default MovieItem;