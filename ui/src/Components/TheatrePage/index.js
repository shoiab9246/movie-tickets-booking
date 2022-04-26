import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import * as ROUTES from '../../Constants/routes.js';
import { useNavigate } from "react-router-dom";

const Theatre = (props) => {
    return(
        <div className="report-item-container">
            <div className="report-item">
                <div className="report-item-child">
                    <div className="report-item-left">
                        <div className="number-overlay">{props.num}</div>
                        <div className="history-speech-text-container">
                            <div className="history-speech-title">Theatre Name: {props.name}</div>
                            <div className="history-speech-subtitle">Theatre City: {props.city}</div>
                        </div>
                    </div>
                </div>
                {/* <div className="separator"></div> */}
            </div>
        </div>
    );
}

const Theatres = (props) => {
    const theatres_data = props.theatres;
    const navigate = useNavigate();
    const handleOnClick = async(id) => {
        const username = localStorage.getItem('username');
        console.log(username)
        navigate('/seat-booking', {state:{theatre_id:id}})
        // console.log("Theatre clicked", id)
    }
    return(
        <div className= "report-list-container">
            <p className="report-title">Theatres</p>
            <div className="report-items-container">
                        {   
                            Object.keys(theatres_data).map((theatre, index) => ( 
                                <div onClick={(e)=>handleOnClick(theatres_data[theatre]._id)}>
                                <Theatre num={index+1} name={theatres_data[theatre].name} city={theatres_data[theatre].city} id={theatres_data[theatre]._id} />
                                </div>
                            ))
                        }
            </div>

        </div>
    );
}

export default Theatres;