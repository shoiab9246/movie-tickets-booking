import React, { Component, useEffect } from 'react';
import { Link, withRouter } from 'react-router-dom';
import * as ROUTES from '../../Constants/routes.js';
import { useNavigate } from "react-router-dom";

import Utils from '../../Utilities';
let API_URL = Utils.API_URL

const MyReservation = () =>{

    const navigate = useNavigate();

    const [reservations, getReservations] = React.useState([])

    useEffect(() => {
        fetchData()
    }, [])

    const fetchData = async() =>{

        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ userId: localStorage.getItem("email") })
        };

        fetch(`${API_URL}/reservation/reservationInfo`, requestOptions)
        .then(
            async response => {
                const reservations_data = await response.json();
                console.log(reservations_data)
                getReservations(reservations_data);
            }
        )
    }

        return (
            <div className='pay-container' style={{ textAlign: 'center', backgroundColor:'thistle', height:'150vh'}}>
                <h1>My Reservations</h1>
                <table width="80%" style= {{margin: "0 auto"}}>
                <tbody>
                    <tr>
                        <th>Booking Confirmation No</th>
                        <th>Movie Name</th>
                        <th>Theatre Name</th>
                        <th>City</th>
                        <th>State</th>
                        <th>Show Date</th>
                        <th>Show Time</th>
                        <th>Seat</th>
                        <th>Rate Us</th>
                    </tr>
                    {reservations.map((item, i) => (
                        <tr key={i}>
                            <td>{item._id}</td>
                            <td>{item.movieId}</td>
                            <td>{item.theatreName}</td>
                            <td>{item.city}</td>
                            <td>{item.state}</td>
                            <td>{item.month}/{item.day}</td>
                            <td>{item.show}</td>
                            <td>{item.seats}</td>
                            <td><button className='button' onClick={() =>  navigate(ROUTES.RATING)}>Rate</button></td>
                        </tr>
                    ))}
                </tbody>
                </table>
     
            </div>
        );
    }

export default MyReservation;