import React, { Component, useEffect } from 'react';
import { Link, withRouter } from 'react-router-dom';
import * as ROUTES from '../../Constants/routes.js';
import { useNavigate } from "react-router-dom";

import Utils from '../../Utilities';
let API_URL = Utils.API_URL

const Feedback = () =>{

    const navigate = useNavigate();

    const [feedbacks, getFeedbacks] = React.useState([])

    useEffect(() => {
        fetchData()
    }, [])

    const fetchData = async() =>{

        const requestOptions = {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' }
        };

        fetch(`${API_URL}/reservation/feedbackInfo`, requestOptions)
        .then(
            async response => {
                const feedback_data = await response.json();
                console.log(feedback_data)
                getFeedbacks(feedback_data);
            }
        )
    }

        return (
            <div className='pay-container' style={{ textAlign: 'center', backgroundColor:'thistle', height:'150vh'}}>
                <h1>Customer Feedbacks</h1>
                <table width="80%" style= {{margin: "0 auto"}}>
                <tbody>
                    <tr>
                        <th>Rating</th>
                        <th>Feedback</th>
                    </tr>
                    {feedbacks.map((item, i) => (
                        <tr key={i}>
                            <td>{item.rating}</td>
                            <td>{item.feedback}</td>
                        </tr>
                    ))}
                </tbody>
                </table>
     
            </div>
        );
    }

export default Feedback;