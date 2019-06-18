import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
	return (
		<div className='Footer'>
    <Link to='/' className='footer-component'>Home</Link>
			<Link to='/login' className='footer-component'>Login</Link>
      <Link to='/gallery' className='footer-component'>Gallery</Link>
      <Link to='/blog' className='footer-component'>Blog</Link>
      <Link to='/calendar' className='footer-component'>Calendar</Link>
      <Link to='/contact' className='footer-component'>Contact</Link>
      <Link to='/about' className='footer-component'>About</Link>
		</div>
	);
}
