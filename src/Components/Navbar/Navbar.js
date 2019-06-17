import React from 'react';

import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

const Navbar = ({ username }) => {
	return (
		<nav className='Navbar'>
			<Link to='/'>Home</Link>
			<button>
			<Link to='/login'>Login</Link>
			</button>
			<span>{username && username}</span>
		</nav>
	);
};

const mapStateToProps = reduxState => {
	return {
		username: reduxState.username,
	};
};

export default connect(mapStateToProps)(Navbar);
