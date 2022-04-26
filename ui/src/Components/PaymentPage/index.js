import React, { Component, useEffect } from 'react';
import { Link, withRouter } from 'react-router-dom';
import * as ROUTES from '../../Constants/routes.js';
import { useLocation } from "react-router-dom";

import Utils from '../../Utilities';
let API_URL = Utils.API_URL

const Payment = () => {

    const location = useLocation();
    console.log(location);

    const [fullName, setFullName] = React.useState("");
    const [email, setEmail] = React.useState("");
    const [city, setCity] = React.useState("");
    const [state, setState] = React.useState("");
    const [zip, setZip] = React.useState("");
    const [nameOnCard, setNameOnCard] = React.useState("");
    const [cardNumber, setCardNumber] = React.useState("");
    const [expirationMonth, setExpirationMonth] = React.useState("");
    const [expirationYear, setExpirationYear] = React.useState("");
    const [cvv, setCVV] = React.useState("");
    const [points, setPoints] = React.useState("");
    const [redeem, setRedeem] = React.useState(false);

    // const [movieId, setMovieId] = React.useState("");
    // const [theatreId, setTheatreId] = React.useState("");
    // const [seat, setSeat] = React.useState("");
    // const [show, setShow] = React.useState("");
    // const [date, setDate] = React.useState("");
    const [amount, setAmount] = React.useState(location.state.amount);

    const movieId = location.state.movie_id;
    const theatreId = location.state.theatre_id;
    const seats = location.state.seats;
    const show = location.state.show;
    const day = location.state.day;
    const month = location.state.month;
    const year = location.state.year;
    const ticket_amount = location.state.amount;
    const movieName = location.state.movieName;

    const usertype = localStorage.getItem('usertype');

    useEffect(() => {
        if(usertype=="user") {
            getUserInfo();
        }
      }, [])

    const getUserInfo = async(e) =>{
        const user_name = localStorage.getItem("username");
        const user_id = localStorage.getItem("email");
        const req = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json'},
            body: JSON.stringify({
                userid: user_id
                })
            };
        console.log(req);
        fetch(`${API_URL}/user/getinfo`, req)
            .then(
            async response => {
                const body = await response.json();
        
                setFullName(body.firstname+" "+body.lastname);
                setEmail(body.email);
                setCardNumber(body.creditcardnumber);
                setExpirationMonth(body.expirationmonth);
                setExpirationYear(body.expirationyear);
                setZip(body.zip);
                setPoints(body.points);
            }
            
        )
        .catch(() => {

        });;
    }

    const handleChange = () => { 
    
        console.log(redeem)
        setRedeem(!redeem); 
        console.log(redeem)
        if(!redeem && points!=0){
            setAmount(amount - (amount*(points/100)))
            console.log("redeemed",amount)
        }
        else{
            setAmount(ticket_amount)
            console.log("notredemmed",amount)
        }
      }; 

    const handleSubmit = async(e) =>{
        console.log(location.state.theatre_id)
        const req = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                name: fullName,
                day: day,
                month: month,
                year: year,
                email: email,
                show: show,
                theatreId: location.state.theatre_id,
                movieId: movieName,
                amount: amount,
                seats: seats,
                redeem: redeem})
            };
        console.log(req);
        fetch(`${API_URL}/reservation/pay`, req)
                .then(async response => {
                const booking_id = await response.json()
                console.log(booking_id)
                alert("Booking Confirmation No.:"+booking_id+". Booking Confirmation Email sent");
            })
            .catch(() => {

            });
            e.preventDefault();
    }

    if(usertype!="user"){
        return(
            <div className='pay-container' style={{ textAlign: 'center', backgroundColor:'thistle', height:'150vh'}}>
                <h2>Booking the seat {seats} at {show}hrs on {month}/{day}/{year} of {location.state.movieName}</h2>
                <div className='pay-form-container'style={{textAlign:'center', borderStyle:'solid', borderWidth:'10px', borderColor:'rebeccapurple', width:'75vw', margin:"0 auto", color:"black"}}>
                    <form>
                        <p>
                        <input className='input' name='fullName' type='text' label="Full Name" placeholder='Full Name' onChange={e => setFullName(e.target.value)} required defaultValue= {fullName}/>
                        </p>
                        <p>
                        <input className='input' name='username' type='email' label='Email' placeholder='Email' onChange={e => setEmail(e.target.value)} required defaultValue= {email}/>
                        </p>
                        <p>
                        <input className='input' name='city' type='text' label='City' placeholder='City' onChange={e => setCity(e.target.value)} required />
                        <input className='input' name='state' type='text' label='State' placeholder='State' onChange={e => setState(e.target.value)} required />
                        <input className='input' name='zip' type='text' label='Zip' placeholder='Zip' onChange={e => setZip(e.target.value)} required />
                        </p>
                        <p>
                        <input className='input' type="checkbox" name="payment" value="cash" style={{ textAlign: 'center', color: 'black'}}/>Cash Accepted
                        </p>
                        <p>
                        <input className='input' name='nameOnCard' type='text' label='Name on Card' placeholder='Name on Card' onChange={e => setNameOnCard(e.target.value)}  />
                        <input className='input' name='cardNumber' type='text' label='Card Number' placeholder='Card Number' onChange={e => setCardNumber(e.target.value)}  defaultValue= {cardNumber}/>
                        <input className='input' name='expirationMonth' type='text' label='Expiration Month' placeholder='Expiration Month' onChange={e => setExpirationMonth(e.target.value)}  defaultValue= {expirationMonth}/>
                        <input className='input' name='expirationYear' type='text' label='Expiration Year' placeholder='Expiration Year' onChange={e => setExpirationYear(e.target.value)}  defaultValue= {expirationYear}/>
                        <input className='input' name='cvv' type='text' label='CVV' placeholder='CVV' onChange={e => setCVV(e.target.value)} required />
                        </p>
                        <div style={{ textAlign: 'center', backgroundColor:'thistle'}}>
                        <div style={{ textAlign: 'center', color: 'black'}}>Total amount to be paid: ${amount}</div>
                        <p>
                        <button className='button' type='submit' onClick={handleSubmit}>Make Payment</button>
                        </p>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
    else{
        return(
            <div className='pay-container' style={{ textAlign: 'center', backgroundColor:'thistle', height:'150vh'}}>
                <h2>Booking the seats {seats} at {show}hrs on {month}/{day}/{year} of {movieName}</h2>
                <div className='pay-form-container'style={{textAlign:'center', borderStyle:'solid', borderWidth:'10px', borderColor:'rebeccapurple', width:'75vw', margin:"0 auto", color: "black"}}>
                    <form>
                        <p>
                        <input className='input' name='fullName' type='text' label="Full Name" placeholder='Full Name' onChange={e => setFullName(e.target.value)} required defaultValue= {fullName}/>
                        </p>
                        <p>
                        <input className='input' name='username' type='email' label='Email' placeholder='Email' onChange={e => setEmail(e.target.value)} required defaultValue= {email}/>
                        </p>
                        {/* <p>
                        <input className='input' name='city' type='text' label='City' placeholder='City' onChange={e => setCity(e.target.value)} required />
                        <input className='input' name='state' type='text' label='State' placeholder='State' onChange={e => setState(e.target.value)} required />
                        <input className='input' name='zip' type='text' label='Zip' placeholder='Zip' onChange={e => setZip(e.target.value)} required />
                        </p> */}
                        <p>
                        <input className='input' name='nameOnCard' type='text' label='Name on Card' placeholder='Name on Card' onChange={e => setNameOnCard(e.target.value)} required defaultValue= {fullName}/>
                        <input className='input' name='cardNumber' type='text' label='Card Number' placeholder='Card Number' onChange={e => setCardNumber(e.target.value)} required defaultValue= {cardNumber}/>
                        <input className='input' name='expirationMonth' type='text' label='Expiration Month' placeholder='Expiration Month' onChange={e => setExpirationMonth(e.target.value)} required defaultValue= {expirationMonth}/>
                        <input className='input' name='expirationYear' type='text' label='Expiration Year' placeholder='Expiration Year' onChange={e => setExpirationYear(e.target.value)} required defaultValue= {expirationYear}/>
                        <input className='input' name='cvv' type='text' label='CVV' placeholder='CVV' onChange={e => setCVV(e.target.value)} required />
                        </p>
                        <div style={{ textAlign: 'center', backgroundColor:'thistle'}}>
                        <div style={{ textAlign: 'center', color: 'black'}}>Total amount to be paid: ${amount}</div>
                        <div style={{ textAlign: 'center', color: 'black'}}> Your points: {points}</div>
                        <p>
                        <input className='input' type="checkbox" name="redeem" style={{ textAlign: 'center', color: 'black'}} onChange={handleChange} />Redeem Points on this purchase
                        </p>
                        <p>
                        <button className='button' type='submit' onClick={handleSubmit}>Make Payment</button>
                        </p>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}

export default Payment;