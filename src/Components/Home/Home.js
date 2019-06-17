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
				<div className='content-div'>
					Intro
					<Link to='/'>Home</Link>
				</div>
				<div className='content-div' id='gallery'>
					<Link to='/gallery'>Gallery</Link>
				</div>
				<div className='content-div' id='blog'>
					<Link to='/blog'>Blog</Link>
				</div>
				<div className='content-div' id='calendar'>
					<Link to='/calendar'>Calendar</Link>
				</div>
				<div className='content-div' id='contact'>
					<Link to='/contact'>Contact</Link>
				</div>
				<div className='content-div' id='about'>
					<Link to='/about'>About</Link>
				</div>

				<div className='content-div'>
					<TestimonialDisplay />
				</div>
			</div>
		</div>
	);
};

function mapStateToProps(reduxState) {
	return reduxState;
}

export default connect(mapStateToProps)(Home);
