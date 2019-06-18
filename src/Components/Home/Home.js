import React from 'react';

import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import TestimonialDisplay from './TestimonialDisplay';
import Carousel from './Carousel';

const Home = () => {
	return (
		<div className='Home'>
			<Carousel />
			<div className='body'>
				<div className='content-div' id='home-intro'>
					Intro
				</div>
					<Link to='/gallery' className='content-div' id='home-gallery'/>
					<Link to='/blog' className='content-div' id='home-blog'/>
					<Link to='/calendar' className='content-div' id='home-calendar'/>
					<Link to='/contact' className='content-div' id='home-contact'/>
					<Link to='/about' className='content-div' id='home-about'/>
				<div className='content-div'>
					<TestimonialDisplay className='content-div' id='home-testimonial-display'/>
				</div>
			</div>
		</div>
	);
};

function mapStateToProps(reduxState) {
	return reduxState;
}

export default connect(mapStateToProps)(Home);
