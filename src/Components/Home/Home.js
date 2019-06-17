import React from 'react';

import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import TestimonialDisplay from './TestimonialDisplay';

const Home = () => {
	return (
		<div>
			<p>Intro</p>
			<Link to='/'>Home</Link>
			<Link to='/gallery'>Gallery</Link>
			<Link to='/blog'>Blog</Link>
			<Link to='/calendar'>Calendar</Link>
			<Link to='/contact'>Contact</Link>
			<Link to='/about'>About</Link>
			<TestimonialDisplay />
		</div>
	);
};

function mapStateToProps(reduxState) {
	return reduxState;
}

export default connect(mapStateToProps)(Home);
