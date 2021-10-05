import * as React from 'react';
import { useState } from "react";
import {Rating, Button} from '@mui/material';
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
    const changeVote = (id) => {
        console.log(id);
        let api = '/votes/delete/'+id;
        let method = 'DELETE';
        let data = {}
        call_server(method, api, data, true).then(data => {
            console.log('data');
            let filteredArray = votesArray.filter(item => item.id !== id)
            setVotesArray(filteredArray);
            //setVotesArray(votesArray => [...votesArray, data]);
        });
    }
    let votes = 0;
    let vote_by_me = false;
    let my_vote = 0;
    for (var i = 0; i < votesArray.length; i++) {
        votes += parseFloat(votesArray[i].vote);
        console.log(user_id);
        if(parseInt(votesArray[i].user_id) === user_id){
            console.log('matching');
            vote_by_me = true;
            my_vote = votesArray[i];
        };
    }
    
    votes = votes/votesArray.length;
    let button;
    let style = {};
    if(vote_by_me){
        button = <div>You voted: {my_vote.vote} star <Button onClick={() => changeVote(my_vote.id)}>Change my vote</Button></div>;
        style = {
            "pointerEvents": "none",
            "opacity": "0.3"
        }
    }
    return (
        <div>
            {button}
            <div>
            <Rating
            style={style}
            name="hover-feedback"
            value={votes}
            precision={0.5}
            onChange={(event, newValue) => {
                changeRating(newValue);
            }}
            />
            </div>
        </div>

    )
}


export default StarRating;