/**
 * inspiration repo: https://github.com/bradtraversy/vanillawebprojects
 * movie seat booking: https://github.com/bradtraversy/vanillawebprojects/tree/master/movie-seat-booking
 * but in react 🤓
 */

 import '../CSS/seatbookingstyle.css'
 import React, { useState, useEffect } from 'react'
 import clsx from 'clsx'
 import {Button} from 'shards-react'
 import * as ROUTES from '../../Constants/routes.js';
 import { useNavigate} from "react-router-dom";
 import { useLocation } from "react-router-dom";
 import Utils from '../../Utilities';


 let API_URL = Utils.API_URL

 var movies = [
   {
     name: 'Avenger',
     price: 10,
     occupied: [20, 21, 30, 1, 2, 8],
   },
]



 
 export default function SeatBooking() {
 
  const [selectedMovie, setSelectedMovie] = useState(movies[0])
  const [selectedSeats, setSelectedSeats] = useState([])
  const navigate = useNavigate();
  const [meals, setMeals] = useState(0);
  const location = useLocation();
  const theatreId = location.state.theatre_id;
  const [seats, setSeats] = useState([]);
  const [rows, setRows] = useState([]);
  const [showtimes, setShowtimes] = useState([]);

  const handleOnClick = async(id) => {
    const username = localStorage.getItem('username');
    console.log(username)
    if(username=='null') {
        navigate('/login')
        }
    else {
      navigate(ROUTES.PAYMENT, {state:{theatre_id:theatreId,
        amount: selectedSeats.length * selectedMovie.price + meals * 12,
        seats: Array.from(selectedSeats, (s) => rows[Math.floor(s/10)] + (s % 10 + 1)),
        show: selectedMovie.show,
        movieName: selectedMovie.movieName,
        day: new Date().getDate(),
        month: new Date().getMonth() + 1,
        year: new Date().getFullYear()}})
    }
    // console.log("Theatre clicked", id)
}

  function getSettings(){
    const req = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json'},
        body: JSON.stringify({
            theatreId: theatreId
            })
        };
    console.log(req);
    fetch(`${API_URL}/theatre/gettheatrebyID`, req)
        .then(
        async response => {
          const body = await response.json();
          setSeats(Array.from({ length: body[0].seats.length * body[0].seats[0][1]}, (_, i) => i))
          setRows(Array.from(body[0].seats, (r) => r[0]))

          const req2 = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json'},
            body: JSON.stringify({
                theatreName: body[0].name
                })
            };
          fetch(`${API_URL}/showtime/getShowtimes`, req2)
              .then(
              async response => {
                  const body2 = await response.json();
                  for (let i = 0; i < body2.length; i++) {
                    if (i >= movies.length) {
                      movies.push({name: body2[i].startAt + "  " + body2[i].movieTitle,
                                   price: body2[i].ticketPrice, 
                                   show: body2[i].startAt,
                                   movieName: body2[i].movieTitle,
                                   occupied: []})
                    } else {
                      movies[i].name = body2[i].startAt + "  " + body2[i].movieTitle;
                      movies[i].price = body2[i].ticketPrice;
                      movies[i].show = body2[i].startAt;
                      movies[i].movieName = body2[i].movieTitle;
                    }
                  }
                  setShowtimes(body2);
                  setSelectedMovie(movies[0])
              }
              
          )
          .catch(() => {
        
          });;
        }
        
    )
    .catch(() => {

    });;

   
  }

  useEffect(() => {
    getSettings();
  }, []);


   return (
     <div className="SeatBooking">
      
       <Movies
         movies={movies}
         movie={selectedMovie}
         onChange={movie => {
           setSelectedSeats([])
           setSelectedMovie(movie)
         }}
       />
       <ShowCase />
       <Cinema
         movie={selectedMovie}
         seats={seats}
         selectedSeats={selectedSeats}
         onSelectedSeatsChange={selectedSeats => setSelectedSeats(selectedSeats)}
       />
 
       <p className="info">
         You have selected <span className="count">{selectedSeats.length}</span>{' '}
         seats for the price of{' '}
         <span className="total">
           {selectedSeats.length * selectedMovie.price}$
         </span>
       </p>
       <SelectMeal
         meals={meals}
         onChange={meals => {setMeals(meals)}}
       />
       <div className="Navigate">
          <Button onClick = {(e) =>  handleOnClick()}
            pill theme="light" id='Navigate'>process payment</Button>
       </div>
     </div>
   )
 }
 
 function Movies({ movies, movie, onChange }) {
   return (
     <div className="Movies">
       <label htmlFor="movie">select a movie</label>
       <select
         id="movie"
         value={movie.name}
         onChange={e => {
           onChange(movies.find(movie => movie.name === e.target.value))
         }}
       >
         {movies.map(movie => (
           <option key={movie.name} value={movie.name}>
             {movie.name} (${movie.price})
           </option>
         ))}
       </select>
     </div>
   )
 }
 
 function ShowCase() {
   return (
     <ul className="ShowCase">
       <li>
         <span className="seat" /> <small>N/A</small>
       </li>
       <li>
         <span className="seat selected" /> <small>Selected</small>
       </li>
       <li>
         <span className="seat occupied" /> <small>Occupied</small>
       </li>
     </ul>
   )
 }
 
 function Cinema({ movie, seats, selectedSeats, onSelectedSeatsChange }) {


   function handleSelectedState(seat) {
     const isSelected = selectedSeats.includes(seat)
     if (isSelected) {
       onSelectedSeatsChange(
         selectedSeats.filter(selectedSeat => selectedSeat !== seat),
       )
     } else {
       onSelectedSeatsChange([...selectedSeats, seat])
     }
   }

   return (
     <div className="Cinema">
       <div className="screen" />
 
       <div className="seats">
         {seats.map(seat => {
           const isSelected = selectedSeats.includes(seat)
           const isOccupied = movie.occupied.includes(seat)
           return (
             <span
               tabIndex="0"
               key={seat}
               className={clsx(
                 'seat',
                 isSelected && 'selected',
                 isOccupied && 'occupied',
               )}
               onClick={isOccupied ? null : () => handleSelectedState(seat)}
               onKeyPress={
                 isOccupied
                   ? null
                   : e => {
                       if (e.key === 'Enter') {
                         handleSelectedState(seat)
                       }
                     }
               }
             />
           )
         })}
       </div>
     </div>
   )
  }

   function SelectMeal({meals, onChange}) {
     return (
      <div  className="SelectMeal">
      <div htmlFor="meal" style={{color:'white'}}>enter total meals (at $12 per meal):
      <input onChange={e => {console.log(e.target.value); onChange(e.target.value)}} type="text" id="meal" name="meal" maxLength="15" value={meals}/>, meal total: {meals * 12}
      </div>
      <br></br>
      </div>
     )
   }

 