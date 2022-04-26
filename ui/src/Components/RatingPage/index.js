import React, { Component, useEffect } from 'react';
import { Link, withRouter } from 'react-router-dom';
import * as ROUTES from '../../Constants/routes.js';
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import ReactStars from "react-rating-stars-component";

import Utils from '../../Utilities';
let API_URL = Utils.API_URL

const Rating = () =>{

    const [rate, setRate] = React.useState("")
    const [feedback, setFeedback] = React.useState("")

    const handleSubmit = async(e) =>{
        console.log(rate)
        console.log(feedback)

        const req = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                rating: rate,
                feedback: feedback,
                })
            };
            fetch(`${API_URL}/reservation/rating`, req)
            .then(async response => {
            alert("Thank you for your feedback");
        })
        .catch(() => {

        });
        e.preventDefault();
    }

    const ratingChanged = (newRating) => {
        setRate(newRating)
      };

    return(

        <div className='pay-container' style={{ textAlign: 'center', backgroundColor:'thistle', height:'150vh', justifyContent:'center', alignItems:'center'}}>
            <h1>Please rate your booking experience with us</h1>
            <div className='pay-form-container'style={{textAlign:'center', borderStyle:'solid', borderWidth:'10px', borderColor:'rebeccapurple', width:'75vw', margin:"0 auto"}}>
                <form>
                    <p>
                    <ReactStars count={5} onChange={ratingChanged} size={50} activeColor="#ffd700" style= {{margin: "0 auto"}}/>
                    <textarea onChange={(e) => {setFeedback(e.target.value)}}>Provide Feedback Here</textarea>
                    </p>
                    <p>
                    <button className='button' type='submit' onClick={handleSubmit}>Submit Feedback</button>
                    </p>
                </form>
            </div>
        </div>
    );

}

export default Rating;