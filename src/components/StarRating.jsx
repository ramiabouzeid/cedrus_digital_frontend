import * as React from 'react';
import { useState } from "react";
import {Rating} from '@mui/material';
import { call_server } from '../utils/api';


const StarRating = (props) => {
    const [votesArray, setVotesArray] = useState(props.votes);
    const changeRating = (event, newRating) => {
        let user = JSON.parse(localStorage.getItem("user"));
        let user_id = user.id;
        let api = '/votes';
        let method = 'POST';
        let data = {
            user_id: user_id,
            video_id: props.id,
            vote: event
        }
        call_server(method, api, data, true).then(data => {
            setVotesArray(votesArray => [...votesArray, data]);
            console.log(votesArray);
        });
    }
    let votes = 0;
    for (var i = 0; i < votesArray.length; i++) {
        votes += parseFloat(votesArray[i].vote);
        console.log(votesArray[i].vote);
    }
    console.log('votes');
    votes = votes/votesArray.length;
    console.log(votes);
    return (
        <Rating
            name="hover-feedback"
            value={votes}
            precision={0.5}
            onChange={(event, newValue) => {
                changeRating(newValue);
            }}
        />

    )
}


export default StarRating;