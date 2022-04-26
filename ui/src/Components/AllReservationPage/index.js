import React, { Component, useEffect } from 'react';
import { Link, withRouter } from 'react-router-dom';
import * as ROUTES from '../../Constants/routes.js';
import { useNavigate } from "react-router-dom";

import Utils from '../../Utilities';
let API_URL = Utils.API_URL

const AllReservation = () =>{
    const [reservations, getReservations] = React.useState([])

    useEffect(() => {
        fetchData()
    }, [])

    const fetchData = async() =>{
        const requestOptions = {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' }
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
                <h1>All Reservations</h1>
                <table width="80%" style= {{margin: "0 auto"}}>
                <tbody>
                    <tr>
                        <th>Customer Id</th>
                        <th>Customer Name</th>
                        <th>Booking Confirmation No</th>
                        <th>Movie Name</th>
                        <th>Theatre Name</th>
                        <th>City</th>
                        <th>State</th>
                        <th>Show Date</th>
                        <th>Showtime</th>
                    </tr>
                    {reservations.map((item, i) => (
                        <tr key={i}>
                            <td>{item.email}</td>
                            <td>{item.name}</td>
                            <td>{item._id}</td>
                            <td>{item.movieId}</td>
                            <td>{item.theatreName}</td>
                            <td>{item.city}</td>
                            <td>{item.state}</td>
                            <td>{item.month}/{item.day}</td>
                            <td>{item.show}</td>
                        </tr>
                    ))}
                </tbody>
                </table>
     
            </div>
        );
    }

export default AllReservation;