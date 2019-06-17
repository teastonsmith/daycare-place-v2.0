import React from 'react';

import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import TestimonialDisplay from './TestimonialDisplay';
import Carousel from './Carousel';

const Home = () => {
	return (
		<div className='Home'>
			<Carousel />
			<div className='home-body'>
				<div className='home-content' id='intro'>
					Intro
					<Link to='/'>Home</Link>
				</div>
				<div className='home-content' id='gallery'>
					<Link to='/gallery'>Gallery</Link>
				</div>
				<div className='home-content' id='blog'>
					<Link to='/blog'>Blog</Link>
				</div>
				<div className='home-content' id='calendar'>
					<Link to='/calendar'>Calendar</Link>
				</div>
				<div className='home-content' id='contact'>
					<Link to='/contact'>Contact</Link>
				</div>
				<div className='home-content' id='about'>
					<Link to='/about'>About</Link>
				</div>
				<TestimonialDisplay />
			</div>
		</div>
	);
};

function mapStateToProps(reduxState) {
	return reduxState;
}

export default connect(mapStateToProps)(Home);
