import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './Components/Home/Home';
import Login from './Components/Login/Login';
import Details from './Components/Details/Details';
import Gallery from './Components/Gallery/Gallery'
import Blog from './Components/Blog/Blog'
import Calendar from './Components/Calendar/CalendarDisplay'
import Contact from './Components/Details/Contact'
import About from './Components/Details/About'

export default (
	<Switch>
		<Route exact path='/' component={Home} />
		<Route path='/login' component={Login} />
		<Route path='/details' component={Details} />
		<Route path='/gallery' component={Gallery} />
		<Route path='/blog' component={Blog} />
		<Route path='/calendar' component={Calendar} />
		<Route path='/contact' component={Contact} />
		<Route path='/about' component={About} />
	</Switch>
);
