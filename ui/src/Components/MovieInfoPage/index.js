import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import * as ROUTES from '../../Constants/routes.js';
import poster1 from '../../Images/blackpanther.jpg';
import poster2 from '../../Images/blackwidow.jpg';
import poster3 from '../../Images/farfromhome.jpg';
import poster4 from '../../Images/avengers.jpg';
import poster5 from '../../Images/endgame.jpg';
import poster6 from '../../Images/doctorstrange.png';
import poster7 from '../../Images/ironman.jpg';
import poster8 from '../../Images/ragnarok.jpg';
import poster9 from '../../Images/shangchi.jpg';
import title1 from '../../Images/blackpanthertitle.png';
import title2 from '../../Images/blackwidowtitle.png';
import title3 from '../../Images/spidermantitle.png';
import title4 from '../../Images/avengerstitle.png';
import title5 from '../../Images/endgametitle.png';
import title6 from '../../Images/doctorstrangetitle.png';
import title7 from '../../Images/ironmantitle.png';
import title8 from '../../Images/ragnaroktitle.png';
import title9 from '../../Images/shangchititle.png';

const imgUrls = [
    poster1,
    poster2,
    poster3,
    poster4,
    poster5,
    poster6,
    poster7,
    poster8,
    poster9
];

const movieTitles = [
    title1,
    title2,
    title3,
    title4,
    title5,
    title6,
    title7,
    title8,
    title9
];

const descriptions = [
    "T'Challa, heir to the hidden but advanced kingdom of Wakanda, must step forward to lead his people into a new future and must confront a challenger from his country's past.",
    "Natasha Romanoff confronts the darker parts of her ledger when a dangerous conspiracy with ties to her past arises.",
    "Following the events of Avengers: Endgame (2019), Spider-Man must step up to take on new threats in a world that has changed forever.",
    "Earth's mightiest heroes must come together and learn to fight as a team if they are going to stop the mischievous Loki and his alien army from enslaving humanity.",
    "After the devastating events of Avengers: Infinity War (2018), the universe is in ruins. With the help of remaining allies, the Avengers assemble once more in order to reverse Thanos' actions and restore balance to the universe.",
    "While on a journey of physical and spiritual healing, a brilliant neurosurgeon is drawn into the world of the mystic arts.",
    "After being held captive in an Afghan cave, billionaire engineer Tony Stark creates a unique weaponized suit of armor to fight evil.",
    "Imprisoned on the planet Sakaar, Thor must race against time to return to Asgard and stop Ragnarök, the destruction of his world, at the hands of the powerful and ruthless villain Hela.",
    "Shang-Chi, the master of weaponry-based Kung Fu, is forced to confront his past after being drawn into the Ten Rings organization."
];

const movieinfo = () => {

    var movieIndex = localStorage.getItem("movieIndex");

    return (  
    <div style={{textAlign: 'center', backgroundColor: 'black', height: '100vh'}}>
    <div style={{ color: '#1d211f' }} >

    <br></br>
    <img src={movieTitles[movieIndex]} alt="title" width='400px' height='200px'/>
    <br></br>
    <img src={imgUrls[movieIndex]} alt="title" width='150px' height='200px'/>
    <br></br>
    <br></br>

    <div style={{borderStyle:'solid', borderColor:'blueviolet', width:'50vw', textAlign:'center', backgroundColor:'lavender', margin:'0 auto'}}>
        <h3>{descriptions[movieIndex]}</h3>
    </div>

    <br></br>
    <h2><Link to={ROUTES.CAROUSEL}>go back</Link></h2>
    <br></br>

    </div>
    </div>
    );
  }

  export default movieinfo;