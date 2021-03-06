import React from 'react';

import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import Logo from './Logo';

const Navbar = ({ username }) => {
	return (
		<div>
			<nav className='Navbar'>
			<Logo />
				<Link to='/' id='navbar-home-link'>Home</Link>
				<button type='button' class='btn btn-light' id='navbar-login-button'>
					<Link to='/login'>Login</Link>
				</button>
				<span>{username && username}</span>
			</nav>
		</div>
	);
};

const mapStateToProps = reduxState => {
	return {
		username: reduxState.username,
	};
};

export default connect(mapStateToProps)(Navbar);
