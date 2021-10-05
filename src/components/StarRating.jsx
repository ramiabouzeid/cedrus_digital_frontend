import * as React from 'react';
import { useState } from "react";
import {Rating} from '@mui/material';
import { call_server } from '../utils/api';


const StarRating = (props) => {
    const [votesArray, setVotesArray] = useState(props.votes);
    let user = JSON.parse(localStorage.getItem("user"));
    let user_id = user.id;
    const changeRating = (event, newRating) => {
        let api = '/votes';
        let method = 'POST';
        let data = {
            user_id: user_id,
            video_id: props.id,
            vote: event
        }
        call_server(method, api, data, true).then(data => {
            setVotesArray(votesArray => [...votesArray, data]);
        });
    }
    let votes = 0;
    let vote_by_me = false;
    for (var i = 0; i < votesArray.length; i++) {
        votes += parseFloat(votesArray[i].vote);
        if(votesArray[i].user_id === user_id){
            vote_by_me = true;
        };
    }
    
    votes = votes/votesArray.length;
    if(vote_by_me){
        return (
            <div>You already voted</div>
        )
    }
    return (
        <div>
            <Rating
            name="hover-feedback"
            value={votes}
            precision={0.5}
            onChange={(event, newValue) => {
                changeRating(newValue);
            }}
            />
        </div>

    )
}


export default StarRating;