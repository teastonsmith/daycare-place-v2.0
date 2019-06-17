import React from 'react';
import router from './router';
import './App.css';
import { HashRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import Navbar from './Components/Navbar/Navbar';
import Footer from './Components/Footer/Footer'

const App = () => (
	<HashRouter>
		<Navbar />
		{router}
		<Footer/>
	</HashRouter>
);

function mapStateToProps(state) {
	return {
		key: state.store,
	};
}

export default connect(mapStateToProps)(App);
