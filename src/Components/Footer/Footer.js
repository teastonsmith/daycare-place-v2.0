import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
	return (
		<div className='Footer'>
			<Link to='/login'>Login</Link>
      <Link to='/gallery'>Gallery</Link>
      <Link to='/blog'>Blog</Link>
      <Link to='/calendar'>Calendar</Link>
      <Link to='/contact'>Contact</Link>
      <Link to='/about'>About</Link>
		</div>
	);
}
