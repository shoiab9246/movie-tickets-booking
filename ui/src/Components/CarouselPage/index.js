import React, { Component } from 'react';
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
import leftArrow from '../../Images/left.png';
import rightArrow from '../../Images/right.png';
import bookMyMovieLogo from '../../Images/logo.png';

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

function calculateNextIdx(prevIndex){
    var nextIdx = prevIndex + 1;
    if (nextIdx == imgUrls.length)
    {
        nextIdx = 0;
    }
    return nextIdx;
}

class Carousel extends React.Component {
	constructor (props) {
		super(props);
		
		this.state = {
			frontImgIndex: 0
		};
		
		this.nextSlide = this.nextSlide.bind(this);
		this.previousSlide = this.previousSlide.bind(this);
        this.renderMoviePage = this.renderMoviePage.bind(this);
	}

    componentDidMount() {
        this.interval = setInterval(() => this.setState({ frontImgIndex: calculateNextIdx(this.state.frontImgIndex) }), 2000);
    }
	
	previousSlide () {
		const lastIndex = imgUrls.length - 1;
		const { frontImgIndex } = this.state;
		const shouldResetIndex = frontImgIndex === 0;
		const index =  shouldResetIndex ? lastIndex : frontImgIndex - 1;
		
		this.setState({
			frontImgIndex: index
		});
	}
	
	nextSlide () {
		const lastIndex = imgUrls.length - 1;
		const { frontImgIndex } = this.state;
		const shouldResetIndex = frontImgIndex === lastIndex;
		const index =  shouldResetIndex ? 0 : frontImgIndex + 1;

		this.setState({
			frontImgIndex: index
		});
	}

    renderMoviePage (movieIndex) {
        localStorage.setItem("movieIndex", movieIndex);
        window.location.href = ROUTES.MOVIEINFO;
    }
	
	render () {
        var secondPoster = calculateNextIdx(this.state.frontImgIndex);
        var thirdPoster = calculateNextIdx(secondPoster);

		return (
			<div className="carousel">
                <div style={{textAlign:'center', borderStyle:'solid', borderWidth:'15px', borderColor:'blueviolet', backgroundColor:'lavender', width:'90vw', margin:"0 auto"}}>
                <br></br>
                <img src={leftArrow} alt="L" width='100px' height='100px' onClick={this.previousSlide}/>
                <img src={imgUrls[this.state.frontImgIndex]} alt="0" width='200px' height='300px' onClick={() => this.renderMoviePage(this.state.frontImgIndex)}/>
                <img src={imgUrls[secondPoster]} alt="1" width='200px' height='300px' onClick={() => this.renderMoviePage(secondPoster)}/>
				<img src={imgUrls[thirdPoster]} alt="2" width='200px' height='300px' onClick={() => this.renderMoviePage(thirdPoster)}/>
                <img src={rightArrow} alt="R" width='100px' height='100px' onClick={this.nextSlide}/>
                <br></br>
                <br></br>
                </div>
			</div>
		);
	}
}

const carousel = () => {

    return (  

    <div style={{textAlign: 'center', backgroundColor: 'black', height: '100vh'}}>

    <br></br>
    <img src={bookMyMovieLogo} alt="logo" width='500px' height='280px' />
    <br></br>
    <Carousel/>

    </div>
    );
  }

  export default carousel;